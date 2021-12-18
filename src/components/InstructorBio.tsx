import React from "react";
import { useInView } from "react-intersection-observer";

interface instructorBioInput {
  instructorBio: {
    id: number;
    image: string;
    name: string;
    title: string;
    text: string;
  };
}

export default function InstructorBio({ instructorBio }: instructorBioInput) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={
        +inView ? "instructorBio instructorBio-animation" : "instructorBio"
      }
    >
      <img alt="Paul" className="bioImage" src={instructorBio.image}></img>
      <div className="instructorText instructorName">{instructorBio.name}</div>
      <div className="instructorText instructorTitle">
        {instructorBio.title}
      </div>
      <div className="instructorText bioDescription">{instructorBio.text}</div>
    </div>
  );
}
