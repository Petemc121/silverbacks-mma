import React from "react";
import { useState, useCallback } from "react";

interface sliderImageInput {
  sliderImage: {
    id: number;
    src: string;
    textID: string;
    heading: string;
    paragraph: string;
    button: boolean;
    buttonText: string;
    imageContainerContent: string;
  };
  slidePosition: string;
}

export default function SliderImg({
  sliderImage,
  slidePosition,
}: sliderImageInput) {
  const text = useCallback(
    (node) => {
      if (node !== null) {
        if (slidePosition[0].includes(sliderImage.id.toString())) {
          console.log(slidePosition);
          console.log(sliderImage.id.toString());
          setTimeout(() => {
            node.style.opacity = "1";
          }, 100);
        } else {
          node.style.opacity = "0";
        }
      }
    },
    [slidePosition, sliderImage.id]
  );

  return (
    <div
      className="imageContainer"
      style={{ justifyContent: sliderImage.imageContainerContent }}
    >
      <img className="sliderImg" alt="mats" src={sliderImage.src}></img>
      <div ref={text} id={sliderImage.textID} className="imageText">
        <h1>{sliderImage.heading}</h1>
        <p>{sliderImage.paragraph}</p>
        <button
          style={{ display: sliderImage.button ? "block" : "none" }}
          className="buttons onBlackButtons"
          id="startNow"
        >
          {sliderImage.buttonText}
        </button>
      </div>
      <div className="blackout"></div>
    </div>
  );
}
