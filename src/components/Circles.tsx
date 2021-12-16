import React from "react";
import Circle from "./Circle";

interface circlesInput {
  heroImages: {
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
  heroImages,
  setSlidePosition,
}: circlesInput) {
  return (
    <div id="circleContainer">
      {heroImages.map((heroImage) => {
        return (
          <Circle setSlidePosition={setSlidePosition} heroImage={heroImage} />
        );
      })}
    </div>
  );
}
