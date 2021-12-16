import React from "react";
import { useState, useCallback } from "react";

interface HeroImageInput {
  heroImage: {
    id: number;
    src: string;
    slide: boolean;
    imageID: string;
    textID: string;
    heading: string;
    paragraph: string;
    button: boolean;
    buttonText: string;
    imageContainerID: string;
    imageContainerContent: string;
  };
  slidePosition?: string;
}

export default function SliderImg({
  heroImage,
  slidePosition,
}: HeroImageInput) {
  const text = useCallback(
    (node) => {
      if (node !== null) {
        if (
          slidePosition &&
          slidePosition[0].includes(heroImage.id.toString())
        ) {
          setTimeout(() => {
            node.style.opacity = "1";
          }, 100);
        } else {
          node.style.opacity = "0";
        }
      }
    },
    [slidePosition, heroImage.id]
  );

  return (
    <div
      className="imageContainer"
      id="aboutImageContainer"
      style={{ justifyContent: heroImage.imageContainerContent }}
    >
      <img
        className="sliderImg"
        id={heroImage.imageID}
        alt="mats"
        src={heroImage.src}
      ></img>
      <div ref={text} id={heroImage.textID} className="imageText">
        <h1>{heroImage.heading}</h1>
        <p>{heroImage.paragraph}</p>
        <button
          style={{ display: heroImage.button ? "block" : "none" }}
          className="buttons onBlackButtons"
          id="startNow"
        >
          {heroImage.buttonText}
        </button>
      </div>
      <div
        className={
          heroImage.slide === true ? "blackout blackoutSlide" : "blackout"
        }
      ></div>
    </div>
  );
}
