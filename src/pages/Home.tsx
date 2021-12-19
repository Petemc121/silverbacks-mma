import Header from "../components/Header";
import Slider from "../components/Slider";
import paul from "../images/paul.png";
import gorilla from "../images/gorilla.png";
import Description from "../components/Description";

export default function Home() {
  const desArray = [
    {
      id: "instructorsDescription",
      title: "World Class Instruction",
      text: "Our Head coach Paul McGinty is a proffesional MMA fighter and multiple time IBJJF and Abu Dhabi medalist. Meet the rest of the team!",
      animationClass: "instructorDescription-animation",
    },
    {
      id: "gorillaDescription",
      title: "First Class is Free!",
      text: "Our lessons are open to anyone and everyone. Give your first session with us a try for absolutely free.",
      animationClass: "gorillaDescription-animation",
    },
  ];

  return (
    <div className="App">
      <div id="headerSliderContainer">
        <Header />
        <Slider />
      </div>
      <div id="instructorContainer">
        <img id="paul" alt="paul" src={paul}></img>
        <Description inputs={desArray[0]} />
      </div>
      <div id="gorillaContainer">
        <Description inputs={desArray[1]} />
        <img id="gorilla" alt="gorilla" src={gorilla}></img>
      </div>
    </div>
  );
}
