import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import warmups from "../images/warmups.png";
import Session from "../components/Session";
import { useState } from "react";

export default function Schedule() {
  const [sessionClicked, setSessionClicked] = useState("none");

  const onSessionClick = (e: any) => {
    e.target.style.top = "50%";
    e.target.style.left = "50%";
  };

  const resetSession = () => {
    setSessionClicked("none");
  };

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
    buttonLink: "",
    imageContainerID: "aboutImageContainer",
    imageContainerContent: "center",
  };

  const sessions = [
    {
      id: "0",
      class: "session nogi monday",
      animationClass: "session nogi animation monday",
      title: "Adults No-gi",
      time: "6:30am - 8:00am",
    },
    {
      id: "1",
      class: "session nogi friday",
      animationClass: "session nogi animation friday",
      title: "Adults No-gi",
      time: "6:30am - 8:00am",
    },
    {
      id: "2",
      class: "session kids monday",
      animationClass: "session kids animation monday",
      title: "Kids 5-10 years old BJJ",
      time: "4:30pm - 5:15pm",
    },
    {
      id: "3",
      class: "session kids thursday",
      animationClass: "session kids animation thursday",
      title: "Kids 5-10 years old BJJ",
      time: "4:30pm - 5:15pm",
    },
    {
      id: "4",
      class: "session teens monday",
      animationClass: "session teens animation monday",
      title: "Kids 11-14 years old BJJ",
      time: "5:15pm - 6:00pm",
    },
    {
      id: "5",
      class: "session teens monday",
      animationClass: "session teens animation monday",
      title: "Kids 11-14 years old BJJ",
      time: "5:15pm - 6:00pm",
    },
    {
      id: "6",
      class: "session gi-early tuesday",
      animationClass: "session gi-early animation tuesday",
      title: "Adults BJJ",
      time: "7:00pm - 8:30pm",
    },
    {
      id: "7",
      class: "session wrestling friday",
      animationClass: "session wrestling animation friday",
      title: "Wrestling",
      time: "7:00pm - 9:00pm",
    },
    {
      id: "8",
      class: "session mma monday",
      animationClass: "session mma animation monday",
      title: "MMA",
      time: "8:00pm - 9:30pm",
    },
    {
      id: "9",
      class: "session nogiEvening wednesday",
      animationClass: "session nogiEvening animation wednesday",
      title: "Adults No-gi",
      time: "8:00pm - 9:30pm",
    },
    {
      id: "10",
      class: "session gi thursday",
      animationClass: "session gi animation thursday",
      title: "Adults BJJ",
      time: "8:00pm - 9:30pm",
    },
  ];

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

          {sessions.map((session) => {
            return <Session onClick={onSessionClick} session={session} />;
          })}
        </div>
      </div>

      <div
        style={{ display: sessionClicked !== "none" ? "flex" : "none" }}
        id="gallerySliderContainer"
      >
        <div onClick={resetSession} id={"gallerySlideImageBackground"}></div>
      </div>
    </div>
  );
}
