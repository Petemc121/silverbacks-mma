import React from "react";
import Header from "../components/Header";
import group from "../images/group.png";
import HeroImage from "../components/HeroImage";
import InstructorBios from "../components/InstructorBios";
import Aron from "../images/Aron.png";
import Paul from "../images/paul.png";
import GandP from "../images/GandP.png";

export default function About() {
  const imgProps = {
    id: 1,
    src: group,
    slide: false,
    imageID: "aboutImage",
    textID: "aboutText",
    heading: "About",
    paragraph: `Silverbacks MMA was founded by Aron Soto and Paul McGinty who saw a lack of Brazilian Jiu Jitsu and MMA in Canterbury. The club has since grown in popularity by the activeness of its members at various competitions around the world.
       
We are a team with a lot of passion that can be seen by the talent that represents us on the nationally and international circuit.Our adult and kids classes both work on the same core values of building strong foundations within the disciplines that we teach. Participating in each class you will learn self discipline, confidence, improve skills like balance, agility and coordination, while also learning to respect your instructors and training partners.
      
We have beginners, advanced and kids classes for Brazilian Jiu Jitsu. Our MMA classes integrate wrestling, Muay Thai, boxing and NoGi Jiu Jitsu, which are all key aspects of Mixed Martial Arts. Silverbacks MMA has something to offer everyone, whether you're a novice or seasoned professional, you will be welcomed to the family.`,
    button: false,
    buttonText: "",
    buttonLink: "",
    imageContainerID: "aboutImageContainer",
    imageContainerContent: "center",
  };

  const instructorBios = [
    {
      id: 1,
      image: Paul,
      name: "Paul McGinty",
      title: "Founder & head coach",
      text: `Brazilian Jiu Jitsu black belt and professional MMA fighter. A multiple time Jiu Jitsu champion and medalist at IBJJF tournaments and Adu Dhabi world professional Jiu Jitsu tournaments.`,
    },
    {
      id: 2,
      image: Aron,
      name: "Aron Soto",
      title: "Founder & Bjj Coach",
      text: `Brazilian Jiu Jitsu brown belt. Abu Dhabi Pro trials champion,
        English Open champion, Grapplers showdown champion and Ringmasters
        MMA finalist.`,
    },
    {
      id: 3,
      image: GandP,
      name: "Paul Attwood",
      title: "MMA & BJJ Coach",
      text: `Brazilian Jiu Jitsu brown belt and professional MMA fighter. ICO  British and European welterweight Champion. Ringmasters Welterweight champion.`,
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
      <h1 className="center instructorsTitle">Instructors</h1>
      <div id="instructorListContainer">
        <div className="instructorBios">
          <InstructorBios instructorBios={instructorBios} />
        </div>
      </div>
    </div>
  );
}
