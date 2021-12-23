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
          <div style={{ gridRow: "time-0700" }} className="times">
            7:00
          </div>

          <div style={{ gridRow: "time-0800" }} className="times">
            8:00
          </div>

          <div style={{ gridRow: "time-1600" }} className="times">
            16:00
          </div>
          <div style={{ gridRow: "time-1700" }} className="times">
            17:00
          </div>
          <div style={{ gridRow: "time-1800" }} className="times">
            18:00
          </div>

          <div style={{ gridRow: "time-1900" }} className="times">
            19:00
          </div>

          <div style={{ gridRow: "time-2000" }} className="times">
            20:00
          </div>

          <div style={{ gridRow: "time-2100" }} className="times">
            21:00
          </div>

          <div className="days monday">Monday</div>
          <div className="days tuesday">Tuesday</div>
          <div className="days wednesday">Wednesday</div>
          <div className="days thursday">Thursday</div>
          <div className="days friday">Friday</div>

          <div className="session nogi monday">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">6:30am - 8:00am</span>
          </div>
          <div className="session nogi friday">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">6:30am - 8:00am</span>
          </div>

          <div className="session kids monday">
            <h4 className="session-title">Kids 5-10 years old BJJ</h4>
            <span className="session-time">4:30pm - 5:15pm</span>
          </div>
          <div className="session kids thursday">
            <h4 className="session-title">Kids 5-10 years old BJJ</h4>
            <span className="session-time">4:30pm - 5:15pm</span>
          </div>
          <div className="session teens monday">
            <h4 className="session-title">Kids 11-14 years old BJJ</h4>
            <span className="session-time">5:15pm - 6:00pm</span>
          </div>
          <div className="session teens thursday">
            <h4 className="session-title">Kids 11-14 years old BJJ</h4>
            <span className="session-time">5:15pm - 6:00pm</span>
          </div>
          <div className="session gi-early tuesday">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">7:00pm - 8:30pm</span>
          </div>
          <div className="session wrestling friday">
            <h4 className="session-title">Wrestling</h4>
            <span className="session-time">7:00pm - 8:30pm</span>
          </div>
          <div className="session mma monday">
            <h4 className="session-title">MMA</h4>
            <span className="session-time">8:00pm - 9:30pm</span>
          </div>
          <div className="session nogiEvening wednesday">
            <h4 className="session-title">Adults No-gi</h4>
            <span className="session-time">8:00pm - 9:30pm</span>
          </div>
          <div className="session gi thursday">
            <h4 className="session-title">Adults BJJ</h4>
            <span className="session-time">8:00pm - 9:30pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
