import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div id="headerLeft">
        <Link className="links" to="/">
          <img alt="logo" id="logo" src={logo}></img>
        </Link>
        <h1 id="gymTitle">SILVERBACKS MMA</h1>
      </div>

      <div id="headerRight">
        <Link className="links" to="/">
          <div className="navigations">Home</div>
        </Link>
        <Link className="links" to="/about">
          <div className="navigations">About</div>
        </Link>
        <div className="navigations">Gallery</div>
        <div className="navigations">Schedule</div>
        <div className="navigations">Location</div>
      </div>
    </div>
  );
}
