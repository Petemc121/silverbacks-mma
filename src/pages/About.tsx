import React from "react";
import Header from "../components/Header";
import Gorilla from "../images/gorilla.png";
import HeroImage from "../components/HeroImage";

export default function About() {
  const imgProps = {
    id: 1,
    src: Gorilla,
    slide: false,
    imageID: "aboutImage",
    textID: "aboutText",
    heading: "About",
    paragraph:
      "Silverbacks MMA was founded by Aron Soto and Paul McGinty who saw a lack of Brazilian Jiu Jitsu and MMA in Canterbury. The club has since grown in popularity by the activeness of its members at various competitions around the world. We are a team with a lot of passion that can be seen by the talent that represents us on the nationally and international circuit.Our adult and kids classes both work on the same core values of building strong foundations within the disciplines that we teach. Participating in each class you will learn self discipline, confidence, improve skills like balance, agility and coordination, while also learning to respect your instructors and training partners. We have beginners, advanced and kids classes for Brazilian Jiu Jitsu. Our MMA classes integrate wrestling, Muay Thai, boxing and NoGi Jiu Jitsu, which are all key aspects of Mixed Martial Arts. Silverbacks MMA has something to offer everyone, whether you're a novice or seasoned professional, you will be welcomed to the family.",
    button: false,
    buttonText: "",
    imageContainerID: "aboutImageContainer",
    imageContainerContent: "center",
  };

  return (
    <div>
      <Header />
      <div className="heroContainer" id="aboutHeroContainer">
        <HeroImage slidePosition={"1"} heroImage={imgProps} />
      </div>
    </div>
  );
}
