import axios from "axios"

const checkAuth = () => {
  /*  Getting token value stored in localstorage, if token is not present we will open login page 
      for all internal dashboard routes  */
  const TOKEN = localStorage.getItem("token")
  const PUBLIC_ROUTES = ["login", "forgot-password", "register", "documentation"]

  const isPublicPage = PUBLIC_ROUTES.some(r => window.location.href.includes(r))

  if (!TOKEN && !isPublicPage) {
    window.location.href = '/login'
    return;
  } else {
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`

    axios.interceptors.request.use(function (config) {
      return config
    }, function (error) {
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = '/login'
      }
      return Promise.reject(error);
    });
    return TOKEN
  }
}

export default checkAuth