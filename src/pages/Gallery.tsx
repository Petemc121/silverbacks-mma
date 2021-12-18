import React from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import sparring from "../images/sparring.png";

export default function Gallery() {
  const imgProps = {
    id: 1,
    src: sparring,
    slide: false,
    imageID: "",
    textID: "",
    heading: "Gallery",
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
