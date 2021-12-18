import React from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import gorilla from "../images/gorilla.png";

export default function Location() {
  const imgProps = {
    id: 1,
    src: gorilla,
    slide: false,
    imageID: "",
    textID: "",
    heading: "Location",
    paragraph: ``,
    button: false,
    buttonText: "",
    imageContainerID: "aboutImageContainer",
    imageContainerContent: "center",
  };

  return (
    <div className="App">
      <div id="aboutHeaderSliderContainer">
        <Header />
        <div className="heroContainer" id="aboutHeroContainer">
          <HeroImage slidePosition={"1"} heroImage={imgProps} />
        </div>
      </div>
    </div>
  );
}
