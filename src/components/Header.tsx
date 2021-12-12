import logo from "../images/logo.png";

export default function Header() {
  return (
    <div id="header">
      <div id="headerLeft">
        <img alt="logo" id="logo" src={logo}></img>
        <h1 id="gymTitle">SILVERBACKS MMA</h1>
      </div>

      <div id="headerRight">
        <div className="navigations">Home</div>
        <div className="navigations">About</div>
        <div className="navigations">Gallery</div>
        <div className="navigations">Schedule</div>
        <div className="navigations">Location</div>
      </div>
    </div>
  );
}
