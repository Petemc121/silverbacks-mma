import { useState, useEffect } from "react";
import mats from "../images/mats.png";
import kids from "../images/kids.png";
import nogi from "../images/nogi.png";
import lineup from "../images/lineup.png";
import GandP from "../images/GandP.png";
import SliderImgs from "./HeroImages";
import Circles from "./Circles";

export default function Slider() {
  const [slidePosition, setSlidePosition] = useState("0%");
  const heroImages = [
    {
      id: 0,
      slide: true,
      src: mats,
      imageID: "",
      textID: "welcome",
      heading: "WELCOME TO SILVERBACKS",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: true,
      buttonText: "Start Now!",
      imageContainerID: "",
      imageContainerContent: "center",
    },
    {
      id: 1,
      src: lineup,
      slide: true,
      imageID: "",
      textID: "family",
      heading: "We're not a team, we're a family",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: false,
      buttonText: "",
      imageContainerID: "",
      imageContainerContent: "flex-start",
    },
    {
      id: 2,
      src: GandP,
      slide: true,
      imageID: "",
      textID: "GandP",
      heading: "MMA CLASSES",
      paragraph: "Brush up on your striking every monday with our MMA classes.",
      button: true,
      buttonText: "Learn More",
      imageContainerID: "",
      imageContainerContent: "flex-start",
    },
    {
      id: 3,
      src: kids,
      slide: true,
      imageID: "",
      textID: "kids",
      heading: "KIDS WELCOME!",
      paragraph: "Check out our frequent schedule for kids jiujitsu classes.",
      button: true,
      buttonText: "Learn More",
      imageContainerID: "",
      imageContainerContent: "flex-start",
    },
    {
      id: 4,
      src: nogi,
      slide: true,
      imageID: "",
      textID: "kids",
      heading: "Grappling",
      paragraph: "Silverbacks caters to both gi and no gi!",
      button: true,
      buttonText: "Learn More",
      imageContainerID: "",
      imageContainerContent: "flex-start",
    },
  ];

  return (
    <div id="slider">
      <div id="holder" style={{ right: slidePosition }}>
        <SliderImgs slidePosition={slidePosition} heroImages={heroImages} />
      </div>
      <Circles setSlidePosition={setSlidePosition} heroImages={heroImages} />
    </div>
  );
}
