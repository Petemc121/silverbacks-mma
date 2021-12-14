import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <div id="headerSliderContainer">
        <Header />
        <Slider />
      </div>
      <div style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
}

export default App;
