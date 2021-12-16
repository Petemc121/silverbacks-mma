import React from "react";

interface circleInput {
  heroImage: {
    id: number;
    src: string;
    textID: string;
    heading: string;
    paragraph: string;
    button: boolean;
  };

  setSlidePosition: React.Dispatch<React.SetStateAction<string>>;
}

export default function Circle({ heroImage, setSlidePosition }: circleInput) {
  function handleSliderPosition() {
    setSlidePosition(heroImage.id + "00%");
  }
  return (
    <button
      key={heroImage.id}
      id={heroImage.id.toString(10)}
      className="circle"
      onClick={handleSliderPosition}
    ></button>
  );
}
