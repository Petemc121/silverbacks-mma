import React from "react";

interface galleryImageInput {
  image: any;
  setImgClicked?: any;
  imageID: number;
}

export default function GalleryImage({
  image,
  setImgClicked,
  imageID,
}: galleryImageInput) {
  function handleImageClicked() {
    setImgClicked(imageID.toString());
  }
  console.log(image);
  return (
    <div onClick={handleImageClicked} className="galleryImage">
      <img alt="galleryImage" src={image} />
    </div>
  );
}
