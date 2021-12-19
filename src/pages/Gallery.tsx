import React from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import sparring from "../images/sparring.png";
import GalleryImages from "../components/GalleryImages";

export default function Gallery() {
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

  function importAll(r: any): any[] {
    let images = {} as any;
    r.keys().map((item: any) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images as any;
  }

  const images = importAll(
    require.context("../images/silverbacks-gallery/", false, /\.png/)
  );
  console.log(images);

  return (
    <div className="App">
      <div id="aboutHeaderSliderContainer">
        <Header />
        <div className="heroContainer" id="aboutHeroContainer">
          <HeroImage slidePosition={"1"} heroImage={imgProps} />
        </div>
      </div>
      <div id="gallery">
        <GalleryImages images={images} />
      </div>
    </div>
  );
}
