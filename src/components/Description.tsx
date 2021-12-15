import { useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";

interface descriptionInputs {
  inputs: { id: string; title: string; text: string; animationClass: string };
}

export default function Description({ inputs }: descriptionInputs) {
  const { ref, inView, entry } = useInView();

  return (
    <div
      ref={ref}
      className={inView ? inputs.animationClass : ""}
      id={inputs.id}
    >
      <h1 style={{ color: "rgb(7, 7, 184", marginBottom: "20px" }}>
        {inputs.title}
      </h1>
      <p>{inputs.text}</p>
      <button className="onWhiteButtons buttons">Learn More</button>
    </div>
  );
}
