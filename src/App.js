import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const toggleCheckbox = () => {
    setDisabled(!disabled);
  };
  const changeButtonColor = () => {
    toggleCheckbox();
    const newButtonColor = buttonColor === "red" ? "gray" : "red";
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
          Click to turn {buttonColor === "red" ? "gray" : "red"}
        </button>
        <input type="checkbox" disabled={disabled} />
      </div>
    </div>
  );
}

export default App;
