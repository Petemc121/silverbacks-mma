import { useState, useEffect } from "react";
import mats from "../images/mats.png";
import kids from "../images/kids.png";
import nogi from "../images/nogi.png";
import lineup from "../images/lineup.png";
import GandP from "../images/GandP.png";
import SliderImgs from "./SliderImgs";

export default function Slider() {
  const [slidePosition, setSlidePosition] = useState(1);
  const sliderImages = [
    {
      id: 1,
      src: mats,
      textID: "welcome",
      heading: "WELCOME TO SILVERBACKS",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: true,
    },
    {
      id: 2,
      src: lineup,
      textID: "welcome",
      heading: "WELCOME TO SILVERBACKS",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: true,
    },
    {
      id: 3,
      src: GandP,
      textID: "nogi",
      heading: "WELCOME TO SILVERBACKS",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: true,
    },
    {
      id: 4,
      src: kids,
      textID: "kids",
      heading: "WELCOME TO SILVERBACKS",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: true,
    },
    {
      id: 5,
      src: nogi,
      textID: "kids",
      heading: "WELCOME TO SILVERBACKS",
      paragraph:
        "Join the family, and become part of one of the leading jiujitsu and MMA gyms in Kent!",
      button: true,
    },
  ];

  return (
    <div id="slider">
      <SliderImgs slidePosition={slidePosition} sliderImages={sliderImages} />
      {sliderImages.map((sliderImage) => {
        return (
          <div
            key={sliderImage.id}
            id={sliderImage.id.toString(10)}
            className="circle"
          ></div>
        );
      })}
    </div>
  );
}
