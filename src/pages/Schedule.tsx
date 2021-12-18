import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import warmups from "../images/warmups.png";

export default function Schedule() {
  const imgProps = {
    id: 1,
    src: warmups,
    slide: false,
    imageID: "",
    textID: "",
    heading: "Schedule",
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
    </div>
  );
}
