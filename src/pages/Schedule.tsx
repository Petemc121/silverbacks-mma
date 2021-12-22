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
          <div style={{ gridRow: "time-0600" }} className="times">
            6:00
          </div>
          <div style={{ gridRow: "time-0630" }} className="times">
            6:30
          </div>
          <div style={{ gridRow: "time-0700" }} className="times">
            7:00
          </div>
          <div style={{ gridRow: "time-0730" }} className="times">
            7:30
          </div>
          <div style={{ gridRow: "time-0800" }} className="times">
            8:00
          </div>
          <div style={{ gridRow: "time-0830" }} className="times">
            8:30
          </div>
          <div style={{ gridRow: "time-1630" }} className="times">
            16:30
          </div>
          <div style={{ gridRow: "time-1715" }} className="times">
            17:15
          </div>
          <div style={{ gridRow: "time-1800" }} className="times">
            18:00
          </div>
          <div style={{ gridRow: "time-1830" }} className="times">
            18:30
          </div>
          <div style={{ gridRow: "time-1900" }} className="times">
            19:00
          </div>
          <div style={{ gridRow: "time-1930" }} className="times">
            19:30
          </div>
          <div style={{ gridRow: "time-2000" }} className="times">
            20:00
          </div>
          <div style={{ gridRow: "time-2030" }} className="times">
            20:30
          </div>
          <div style={{ gridRow: "time-2100" }} className="times">
            21:00
          </div>
          <div style={{ gridRow: "time-2130" }} className="times">
            21:30
          </div>
          <div className="days monday">Monday</div>
          <div className="days tuesday">Tuesday</div>
          <div className="days wednesday">Wednesday</div>
          <div className="days thursday">Thursday</div>
          <div className="days friday">Friday</div>

          <div className="session nogi monday">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">8:00am - 9:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session nogi friday">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">8:00am - 9:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session kids monday">
            <h4 className="session-title">Kids 5-10 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session kids thursday">
            <h4 className="session-title">Kids 5-10 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session teens monday">
            <h4 className="session-title">Kids 11-14 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session teens thursday">
            <h4 className="session-title">Kids 11-14 years old BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session gi tuesday">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session wrestling friday">
            <h4 className="session-title">wrestling</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session mma monday">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session nogiEvening wednesday">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
          <div className="session gi thursday">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">9:00am - 10:00am</span>
            <span className="session-presenter">Presenter Name</span>
          </div>
        </div>
      </div>
    </div>
  );
}
