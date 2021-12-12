import React from "react";

interface sliderImageInput {
  sliderImage: { id: number; src: string; textID: string };
}

export default function SliderImg({ sliderImage }: sliderImageInput) {
  return (
    <div className="imageContainer">
      <div className="blackout"></div>
      <img className="sliderImg" alt="mats" src={sliderImage.src}></img>
      <div id="welcome" className="imageText">
        <h1>WELCOME TO SILVERBACKS</h1>
        <p>
          Join the family, and become part of one of the leading jiujitsu and
          MMA gyms in Kent!
        </p>
        <button className="buttons" id="startNow">
          Start Now!
        </button>
      </div>
    </div>
  );
}
