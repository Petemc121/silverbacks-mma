import { useState } from "react";
import mats from "../images/mats.png";
import SliderImgs from "./SliderImgs";

export default function Slider() {
  const [slidePosition, setSlidePosition] = useState("0%");
  const sliderImages = [{ id: 1, src: mats, textID: "welcome" }];

  return (
    <div id="slider">
      <SliderImgs sliderImages={sliderImages} />
    </div>
  );
}
