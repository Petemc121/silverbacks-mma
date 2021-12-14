import { useState, useEffect } from "react";
import mats from "../images/mats.png";
import kids from "../images/kids.png";
import nogi from "../images/nogi.png";
import lineup from "../images/lineup.png";
import GandP from "../images/GandP.png";
import SliderImgs from "./SliderImgs";
import Circles from "./Circles";

export default function Slider() {
  const [slidePosition, setSlidePosition] = useState("0%");
  const sliderImages = [
    {
      id: 0,
      src: mats,
      textID: "welcome",
      heading: "WELCOME TO SILVERBACKS",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: true,
    },
    {
      id: 1,
      src: lineup,
      textID: "welcome",
      heading: "We're not a team, we're a family",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: false,
    },
    {
      id: 2,
      src: GandP,
      textID: "GandP",
      heading: "MMA CLASSES",
      paragraph: "Brush up on your striking every monday with our MMA classes.",
      button: true,
    },
    {
      id: 3,
      src: kids,
      textID: "kids",
      heading: "KIDS WELCOME!",
      paragraph: "Check out our frequent schedule for kids jiujitsu classes.",
      button: true,
    },
    {
      id: 4,
      src: nogi,
      textID: "kids",
      heading: "Grappling",
      paragraph: "Silverbacks caters to both gi and no gi!",
      button: true,
    },
  ];

  return (
    <div id="slider">
      <div id="holder" style={{ right: slidePosition }}>
        <SliderImgs slidePosition={slidePosition} sliderImages={sliderImages} />
      </div>
      <Circles
        setSlidePosition={setSlidePosition}
        sliderImages={sliderImages}
      />
    </div>
  );
}
