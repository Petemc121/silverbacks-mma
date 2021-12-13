import React from "react";
import { useState, useEffect, useCallback } from "react";

interface sliderImageInput {
  sliderImage: {
    id: number;
    src: string;
    textID: string;
    heading: string;
    paragraph: string;
    button: boolean;
  };
  slidePosition: number;
}

export default function SliderImg({
  sliderImage,
  slidePosition,
}: sliderImageInput) {
  const welcome = useCallback((node) => {
    if (node !== null) {
      setTimeout(() => {
        node.style.opacity = "1";
      }, 100);
    }
  }, []);

  return (
    <div className="imageContainer">
      <div className="blackout"></div>
      <img className="sliderImg" alt="mats" src={sliderImage.src}></img>
      <div ref={welcome} id="welcome" className="imageText">
        <h1>{sliderImage.heading}</h1>
        <p>{sliderImage.paragraph}</p>
        <button
          style={{ display: sliderImage.button ? "block" : "none" }}
          className="buttons"
          id="startNow"
        >
          Start Now!
        </button>
      </div>
    </div>
  );
}
