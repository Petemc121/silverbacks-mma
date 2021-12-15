import "./App.css";
import { useRef } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import paul from "./images/paul.png";
import gorilla from "./images/gorilla.png";

function App() {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    // We will fill in the callback later...
  });
  // Tell the observer which elements to track

  return (
    <div className="App">
      <div id="headerSliderContainer">
        <Header />
        <Slider />
      </div>
      <div id="instructorContainer">
        <img id="paul" alt="paul" src={paul}></img>
        <div id="instructorsDescription">
          <h1 style={{ color: "rgb(7, 7, 184", marginBottom: "20px" }}>
            World Class Instruction
          </h1>

          <p>
            Our Head coach Paul McGinty is a proffesional MMA fighter and
            multiple time IBJJF and Abu Dhabi medalist. Meet the rest of the
            team!
          </p>

          <button className="onWhiteButtons buttons">Learn More</button>
        </div>
      </div>
      <div id="gorillaContainer">
        <div id="gorillaDescription">
          <h1 style={{ color: "rgb(7, 7, 184)", marginBottom: "20px" }}>
            First Class is Free!
          </h1>
          <p>
            Our lessons are open to anyone and everyone. Give your first session
            with us a try for absolutely free.
          </p>

          <button className="onWhiteButtons buttons">Learn More</button>
        </div>
        <img id="gorilla" alt="gorilla" src={gorilla}></img>
      </div>
    </div>
  );
}

export default App;
