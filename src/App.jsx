/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Color = ({ color, selectedColor, setSelectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  return (
    <div
      className={`color ${color} ${selectedColor === color ? 'selected' : ''}`}
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
        <Color
          color="violet"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="blue"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="yellow"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
}

export default App;