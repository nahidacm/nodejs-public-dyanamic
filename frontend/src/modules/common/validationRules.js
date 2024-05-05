const validationRules = {
    username: [
        {
            required: true,
            message: "Please input your Username!",
        },
    ],
    email: [
        {
            type: "email",
            message: "The input is not valid E-mail!",
        },
        {
            required: true,
            message: "Please input your E-mail!",
        },
    ],
    name: [
        {
            required: true,
            message: "Please input your Name!",
        },
    ],
    password: [
        {
            required: true,
            message: "Please input your password!",
        },
    ]

}

export default validationRules;