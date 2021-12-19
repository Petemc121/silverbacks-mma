import React from "react";

interface galleryImageInput {
  image: any;
}

export default function GalleryImage({ image }: galleryImageInput) {
  console.log("image " + image);
  return (
    <>
      <img alt="galleryImage" src={image} />
    </>
  );
}
