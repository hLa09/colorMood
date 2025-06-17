import React, { useState } from "react";
import "./PaletteDisplay.css";
import { updatePalette } from "../../utils/updatePalette";
import { deletePalette } from "../../utils/deletePalette";

const PaletteDisplay = ({ palette }) => {
  const [mood, setMood] = useState(palette.mood || "");
  const [description, setDescription] = useState(palette.description || "");
  const [editing, setEditing] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const handleEdit = () => setEditing(true);
  
  const handleSave = () => {
    if (mood && description) {
      updatePalette(palette.id, { mood, description });
      setEditing(false); // Exit edit mode after saving
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this palette?")) {
      deletePalette(palette.id);
    }
  };

  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
    setCopyMessage(`Copied ${color} to clipboard!`);
    setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2s
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

      {copyMessage && <p className="copyMessage">{copyMessage}</p>}

      <div className="customFeature">
        {editing ? (
          <>
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="Update Mood"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Update Description"
            />
            <button className="save" onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </>
  );
};

export default PaletteDisplay;
