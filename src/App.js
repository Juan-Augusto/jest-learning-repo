import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("blue");
  const [disabled, setDisabled] = useState(false);

  const toggleCheckbox = () => {
    setDisabled(!disabled);
  };
  const changeButtonColor = () => {
    toggleCheckbox();
    const newButtonColor = buttonColor === "blue" ? "red" : "blue";
    setButtonColor(newButtonColor);
  };

  return (
    <div className="App">
      <div>{logo && <img src={logo} className="App-logo" alt="logo" />}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: buttonColor,
            color: "white",
            width: "150px",
          }}
          onClick={changeButtonColor}
        >
          Click to turn {buttonColor === "blue" ? "red" : "blue"}
        </button>
        <input type="checkbox" disabled={disabled} />
      </div>
    </div>
  );
}

export default App;
