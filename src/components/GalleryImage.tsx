import React from "react";

interface galleryImageInput {
  image: any;
  setImgClicked?: any;
  imageID: number;
  imageClass: string;
}

export default function GalleryImage({
  image,
  setImgClicked,
  imageID,
  imageClass,
}: galleryImageInput) {
  function handleImageClicked() {
    setImgClicked(imageID.toString());
  }
  console.log(image);
  return (
    <div
      onClick={setImgClicked ? handleImageClicked : undefined}
      className={imageClass}
    >
      <img className={imageClass} alt="galleryImage" src={image} />
    </div>
  );
}
