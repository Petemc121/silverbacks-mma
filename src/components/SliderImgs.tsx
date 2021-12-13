import React from "react";
import SliderImg from "./SliderImg";

interface sliderImagesInput {
  sliderImages: {
    id: number;
    src: string;
    textID: string;
    heading: string;
    paragraph: string;
    button: boolean;
  }[];
  slidePosition: number;
}

export default function SliderImgs({
  sliderImages,
  slidePosition,
}: sliderImagesInput) {
  return (
    <>
      {sliderImages.map((sliderImage) => {
        return (
          <SliderImg slidePosition={slidePosition} sliderImage={sliderImage} />
        );
      })}
    </>
  );
}
