import "../src/App.css";
import { useState } from "react";

function DiffColors() {
  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "yellow",
    "pink",
    "purple",
    "white",
  ];

  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center gap-4"
      style={{ backgroundColor: bgColor }}
    >
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setBgColor(color)}
          className="w-18 h-12  rounded-full text-lg font-semibold flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
          style={{
            backgroundColor: color,
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

function App() {
  return <DiffColors />;
}

export default App;
