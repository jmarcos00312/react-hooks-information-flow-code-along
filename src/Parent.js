import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  //storing the helper funciton in randomCOlor variable
  const randomColor = getRandomColor();
  //setting color to the random color that will give us random color
  const [color, setColor] = useState(randomColor);
//setting a variable for the children color and making it #FFF as default
  const [childrenColor, setChildrenColor] = useState("#FFF")

  //function that takes in the default value of the children color
  const handleColorChange = (newChildrenColor) => {
    //getting another random color
    const newRandomColor = getRandomColor()
    //make the color the same as the getRandomColor that was called
    setColor(newRandomColor)

    //setting the color of the children to the argument that was passed
    setChildrenColor(newChildrenColor)
  }

  return (
    //returns a div with a className parent and setting the value to the sameColor to what we got when we call the getRandomColor function
    <div className="parent" style={{ backgroundColor: color }}>
      {/* calling the children and making their color the same and picking a random color */}
      <Child color={childrenColor} onChangeColor={handleColorChange} />
      <Child color={childrenColor} onChangeColor={handleColorChange} />
    </div>
  );
}

export default Parent;
