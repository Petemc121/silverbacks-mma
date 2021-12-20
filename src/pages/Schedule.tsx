import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import warmups from "../images/warmups.png";

export default function Schedule() {
  const imgProps = {
    id: 1,
    src: warmups,
    slide: false,
    imageID: "",
    textID: "otherText",
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
      <div id="scheduleContainer">
        <div className="schedule">
          <h3 className="time-slot">6:30am</h3>
          <div className="session nogi">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">8:00am - 9:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session nogi">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">8:00am - 9:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>

          <h3 className="time-slot">7:00am</h3>
          <div className="session gi ">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>

          <h3 className="time-slot">4:30pm</h3>
          <div className="session kids ">
            <h4 className="session-title">Kids 5-10 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session kids ">
            <h4 className="session-title">Kids 5-10 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>

          <h3 className="time-slot">5:15pm</h3>
          <div className="session teens ">
            <h4 className="session-title">Kids 11-14 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session teens ">
            <h4 className="session-title">Kids 11-14 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>

          <h3 className="time-slot">7:00pm</h3>
          <div className="session gi ">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session wrestling ">
            <h4 className="session-title">wrestling</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>

          <h3 className="time-slot">8:00pm</h3>
          <div className="session gi ">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session nogi ">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session gi ">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
        </div>
      </div>
    </div>
  );
}
