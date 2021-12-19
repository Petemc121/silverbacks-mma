import React from "react";
import GalleryImage from "./GalleryImage";

interface galleryImagesInput {
  images: any[];
}

export default function GalleryImages({ images }: galleryImagesInput) {
  console.log(images);
  return (
    <div id="galleryImagesContainer">
      {/* {images.map((image) => {
        console.log(image);
        return <GalleryImage image={image} />;
      })} */}
    </div>
  );
}
