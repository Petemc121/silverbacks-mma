import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";

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
    buttonLink: string;
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

  console.log(heroImage.paragraph);

  return (
    <div
      className="imageContainer"
      id={heroImage.imageContainerID}
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
        <Link className="links" to={heroImage.buttonLink}>
          <button
            style={{ display: heroImage.button ? "block" : "none" }}
            className="buttons onBlackButtons"
            id="startNow"
          >
            {heroImage.buttonText}
          </button>
        </Link>
      </div>
      <div
        className={
          heroImage.slide === true ? "blackout blackoutSlide" : "blackout"
        }
      ></div>
    </div>
  );
}
