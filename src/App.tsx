import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div style={{ height: "400px", width: "auto" }}></div>
    </div>
  );
}

export default App;
