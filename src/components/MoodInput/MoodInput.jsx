import React, { useState } from "react";

import './MoodInput.css'

const MoodInput = ({ fetchPalette }) => {
  const [mood, setMood] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPalette(mood, description); // Send both mood and description separately
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="searchInput"
        type="text" 
        placeholder="Enter mood (e.g., happy, sad, calm)" 
        value={mood} 
        onChange={(e) => setMood(e.target.value)}
      />
      <input className="searchInput"
        type="text" 
        placeholder="Describe your feeling (optional)" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="searchBtn" type="submit">Generate Palette</button>
    </form>
  );
};

export default MoodInput;
