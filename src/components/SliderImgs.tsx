import React from "react";
import SliderImg from "./SliderImg";

interface sliderImagesInput {
  sliderImages: { id: number; src: string; textID: string }[];
}

export default function SliderImgs({ sliderImages }: sliderImagesInput) {
  return (
    <>
      {sliderImages.map((sliderImage) => {
        return <SliderImg sliderImage={sliderImage} />;
      })}
    </>
  );
}
