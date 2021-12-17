import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function handleHamburgerClick() {
    setHamburgerActive(true);
  }

  function handleBackgroundClick() {
    setHamburgerActive(false);
  }

  return (
    <div>
      <FontAwesomeIcon
        id="hamburger"
        onClick={handleHamburgerClick}
        icon={faBars}
        size="2x"
      />
      <div
        style={{ display: hamburgerActive ? "block" : "none" }}
        id="hamburgerBackground"
        onClick={handleBackgroundClick}
      ></div>
      <div
        style={{ right: hamburgerActive ? "-80px" : "-240px" }}
        id="hamburgerNavigationsContainer"
      >
        <div className="hamburgerNavigation">Home</div>
        <div className="hamburgerNavigation">About</div>
        <div className="hamburgerNavigation">Gallery</div>
        <div className="hamburgerNavigation">Schedule</div>
        <div className="hamburgerNavigation">Loaction</div>
      </div>
    </div>
  );
}
