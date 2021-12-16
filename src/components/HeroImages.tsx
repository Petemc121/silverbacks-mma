import React from "react";
import Image from "./HeroImage";

interface sliderImagesInput {
  heroImages: {
    id: number;
    src: string;
    slide: boolean;
    textID: string;
    imageID: string;
    heading: string;
    paragraph: string;
    button: boolean;
    buttonText: string;
    imageContainerID: string;
    imageContainerContent: string;
  }[];
  slidePosition?: string;
}

export default function SliderImgs({
  heroImages,
  slidePosition,
}: sliderImagesInput) {
  return (
    <>
      {heroImages.map((heroImage) => {
        return <Image slidePosition={slidePosition} heroImage={heroImage} />;
      })}
    </>
  );
}
