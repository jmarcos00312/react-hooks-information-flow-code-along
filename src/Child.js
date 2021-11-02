import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  //a function that handles click
  const handleClick = () => {
    //storing the getRandomColor function to the variable newCOlor
    const newColor = getRandomColor()
    // change the color of the background the same thing as the color argument that was passed by
    onChangeColor(newColor)
}

  return (
    <div
      //have a div with a class name child
      className="child"
// made the color of the background the same as the color that was passed in as an argument
      style={{ backgroundColor: color }}
      // handles the click so that when the child was click it will change color randomilt
      onClick={handleClick}
    />
  )
}

export default Child;
