import React from "react";
import GalleryImage from "./GalleryImage";

interface galleryImagesInput {
  images: any[];
  setImgClicked: any;
}

export default function GalleryImages({
  images,
  setImgClicked,
}: galleryImagesInput) {
  console.log(images);
  return (
    <>
      {images.map((image, index) => {
        console.log(image);
        return (
          <GalleryImage
            imageID={index}
            setImgClicked={setImgClicked}
            image={image}
          />
        );
      })}
    </>
  );
}
