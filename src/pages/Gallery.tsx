import { useState } from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import sparring from "../images/sparring.png";
import GalleryImages from "../components/GalleryImages";
import GalleryImage from "../components/GalleryImage";
import importedGalleryImages from "../images/ImportedGallery";

export default function Gallery() {
  const [imgClicked, setImgClicked] = useState("none");
  const imgProps = {
    id: 1,
    src: sparring,
    slide: false,
    imageID: "",
    textID: "otherText",
    heading: "Gallery",
    paragraph: ``,
    button: false,
    buttonText: "",
    imageContainerID: "aboutImageContainer",
    imageContainerContent: "center",
  };

  return (
    <div className="App">
      <div id="aboutHeaderSliderContainer">
        <Header />
        <div className="heroContainer" id="aboutHeroContainer">
          <HeroImage slidePosition={"1"} heroImage={imgProps} />
        </div>
      </div>
      <div id="galleryImagesContainer">
        <GalleryImages
          setImgClicked={setImgClicked}
          images={importedGalleryImages}
        />
      </div>

      <div
        style={{ display: imgClicked !== "none" ? "flex" : "none" }}
        id="gallerySliderContainer"
      >
        <div id={"gallerySlideImageBackground"}></div>
        <GalleryImage
          imageID={parseInt(imgClicked)}
          image={importedGalleryImages[parseInt(imgClicked)]}
        />
      </div>
    </div>
  );
}
