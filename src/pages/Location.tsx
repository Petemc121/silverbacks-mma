import React from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import gorilla from "../images/gorilla.png";
import Map from "../components/Map";
import { useJsApiLoader } from "@react-google-maps/api";

export default function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD-1HmMYXD3JTqFgrQGi2qNABUgnWjsRks",
  });

  const imgProps = {
    id: 1,
    src: gorilla,
    slide: false,
    imageID: "",
    textID: "otherText",
    heading: "Location",
    paragraph: ``,
    button: false,
    buttonText: "",
    buttonLink: "",
    imageContainerID: "aboutImageContainer",
    imageContainerContent: "center",
  };

  return isLoaded ? (
    <div className="App">
      <div id="aboutHeaderSliderContainer">
        <Header />
        <div className="heroContainer" id="aboutHeroContainer">
          <HeroImage slidePosition={"1"} heroImage={imgProps} />
        </div>
      </div>
      <div id="mapContainer">
        <Map />
      </div>
    </div>
  ) : (
    <div className="App">
      <div id="aboutHeaderSliderContainer">
        <Header />
        <div className="heroContainer" id="aboutHeroContainer">
          <HeroImage slidePosition={"1"} heroImage={imgProps} />
        </div>
      </div>
      <div id="mapContainer"></div>
    </div>
  );
}
