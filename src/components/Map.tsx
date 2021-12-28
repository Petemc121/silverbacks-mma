import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "600px",
};

const center = {
  lat: 51.29374426281789,
  lng: 1.104234446036113,
};

const position = {
  lat: 51.29374426281789,
  lng: 1.104234446036113,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD-1HmMYXD3JTqFgrQGi2qNABUgnWjsRks",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    map.panTo({
      lat: 51.29374426281789,
      lng: 1.104234446036113,
    });
    map.setZoom(12);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
    alert("unmounted");
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
