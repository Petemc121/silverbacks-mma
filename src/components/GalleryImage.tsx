import React from "react";

interface galleryImageInput {
  image: any;
}

export default function GalleryImage({ image }: galleryImageInput) {
  console.log("image " + image);
  return (
    <div className="galleryImage">
      <img alt="galleryImage" src={image} />
    </div>
  );
}
