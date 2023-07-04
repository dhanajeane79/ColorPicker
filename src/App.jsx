/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Color = ({ color, setSelectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  return (
    <div
      className={color}
      onClick={handleClick}
    ></div>
  );
};

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
}

export default App;