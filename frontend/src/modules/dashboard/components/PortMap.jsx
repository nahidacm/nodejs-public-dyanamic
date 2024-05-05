import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load the Google Maps API script dynamically
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyClEQroGnpftCFNz3909_PzWi2tXaLvkdQ&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      // Initialize the map
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 12,
        center: { lat: 23.5672404, lng: 89.9932291 },
        mapTypeId: "terrain",
      });

      // Define the LatLng coordinates for the polygon's path.
      const triangleCoords = [
     
      {lat:23.5645655,lng:89.9786786},
      {lat:23.5806285,lng:89.9922505},
      {lat:23.5831501,lng:89.9675157},
      {lat:23.5848877,lng:89.940031},
      {lat:23.5645655,lng:89.9786786},
    
      ];
      const moinotGhatCoords = [
        { lat: 23.6070422, lng: 90.0821058 },
        { lat: 23.608163, lng: 90.0870835 },
        { lat: 23.6258378, lng: 90.1207287 },
        { lat: 23.6318927, lng: 90.0655397 },
        { lat: 23.6213554, lng: 90.0488885 },
        { lat: 23.6121543, lng: 90.0690587 },
        { lat: 23.6070422, lng: 90.0821058 },
      ]
      const moinitGhatPointer = [
        { lat: 23.6198452, lng: 90.0673502 },
      ]
      const mpDangiGhatPointer=[{lat:23.576133,lng:89.9824567},]

      // Construct the polygon.
      const bermudaTriangle = new window.google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#000080",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#808080",
        fillOpacity: 0.35,
      });
      const moinotTriangle = new window.google.maps.Polygon({
        paths: moinotGhatCoords,
        strokeColor: "#000080",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#808080",
        fillOpacity: 0.35,
      })


      bermudaTriangle.setMap(map);
      moinotTriangle.setMap(map);
      new window.google.maps.Marker({
        position: moinitGhatPointer[0],
        map: map,
        title: "ঘাট ১"
      });
      new window.google.maps.Marker({
        position: mpDangiGhatPointer[0],
        map: map,
        title: "ঘাট ২"
      });
      // moinotGhatPointerMarker.setMap(map);
    });


    return () => {
      // Cleanup
      window.document.body.removeChild(googleMapScript);
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '650px' }} />;
};

export default Map;