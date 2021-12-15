import React from "react";
import Circle from "./Circle";

interface circlesInput {
  sliderImages: {
    id: number;
    src: string;
    textID: string;
    heading: string;
    paragraph: string;
    button: boolean;
  }[];
  setSlidePosition: React.Dispatch<React.SetStateAction<string>>;
}

export default function Circles({
  sliderImages,
  setSlidePosition,
}: circlesInput) {
  return (
    <div id="circleContainer">
      {sliderImages.map((sliderImage) => {
        return (
          <Circle
            setSlidePosition={setSlidePosition}
            sliderImage={sliderImage}
          />
        );
      })}
    </div>
  );
}
