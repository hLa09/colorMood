import React, { useState } from "react";
import "./PaletteDisplay.css";
import { updatePalette } from "../../utils/updatePalette";
import { deletePalette } from "../../utils/deletePalette";

const PaletteDisplay = ({ palette }) => {
  if (!palette || !Array.isArray(palette.colors) || palette.colors.length === 0) {
    return <p>Oops! No colors generated. Try a different mood description.</p>;
  }

  const handleEdit = () => {
    const newMood = prompt("Enter new mood:", palette.mood || "");
    const newDescription = prompt("Enter new description:", palette.description || "");
    if (newMood && newDescription) {
      updatePalette(palette.id, { mood: newMood, description: newDescription });
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this palette?")) {
      deletePalette(palette.id);
    }
  };

  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <>
      <div className="colorGen">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="ColorCard"
            style={{ backgroundColor: color }}
            onClick={() => handleCopy(color)}
          >
            <span className="hexValue">{color}</span>
          </div>
        ))}
      </div>

      <div className="customFeature">
        <button className="edit" onClick={handleEdit}>Edit</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default PaletteDisplay;
