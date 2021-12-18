import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        style={{ right: hamburgerActive ? "-40px" : "-240px" }}
        id="hamburgerNavigationsContainer"
      >
        <Link className="links" to="/">
          <div className="hamburgerNavigation">Home</div>
        </Link>
        <Link className="links" to="/about">
          <div className="hamburgerNavigation">About</div>
        </Link>
        <Link className="links" to="/gallery">
          <div className="hamburgerNavigation">Gallery</div>
        </Link>
        <Link className="links" to="/schedule">
          <div className="hamburgerNavigation">Schedule</div>
        </Link>
        <Link className="links" to="/location">
          <div className="hamburgerNavigation">Location</div>
        </Link>
      </div>
    </div>
  );
}
