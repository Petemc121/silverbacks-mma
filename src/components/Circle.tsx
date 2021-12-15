import React from "react";

interface circleInput {
  sliderImage: {
    id: number;
    src: string;
    textID: string;
    heading: string;
    paragraph: string;
    button: boolean;
  };

  setSlidePosition: React.Dispatch<React.SetStateAction<string>>;
}

export default function Circle({ sliderImage, setSlidePosition }: circleInput) {
  function handleSliderPosition() {
    setSlidePosition(sliderImage.id + "00%");
  }
  return (
    <button
      key={sliderImage.id}
      id={sliderImage.id.toString(10)}
      className="circle"
      onClick={handleSliderPosition}
    ></button>
  );
}
