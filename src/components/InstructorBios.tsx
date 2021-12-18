import React from "react";
import InstructorBio from "./InstructorBio";

interface instructorBiosInput {
  instructorBios: {
    id: number;
    image: string;
    name: string;
    title: string;
    text: string;
  }[];
}

export default function InstructorBios({
  instructorBios,
}: instructorBiosInput) {
  return (
    <>
      {instructorBios.map((instructorBio) => {
        return <InstructorBio instructorBio={instructorBio} />;
      })}
    </>
  );
}
