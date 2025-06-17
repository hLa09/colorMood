import React, { useState, useEffect } from "react";
import { fetchRandomColors } from "../../utils/fetchRandomColors";

import './RandomColorGenerator.css';

const rgbToHex = (rgb) => {
  return `#${rgb.map((val) => val.toString(16).padStart(2, "0")).join("")}`;
};

const getTextColor = (rgb) => {
  const [r, g, b] = rgb;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF"; // Light background → Black text, Dark background → White text
};

const RandomColorGenerator = () => {
  const [colors, setColors] = useState([]);
  const [hoverHex, setHoverHex] = useState(null);

  // Fetch random colors when component mounts
  useEffect(() => {
    generateColors();
  }, []);

  const generateColors = async () => {
    const randomColors = await fetchRandomColors();
    console.log("Generated Colors:", randomColors);
    if (randomColors) {
      setColors(randomColors);
    }
  };

  const copyHexToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    alert(`Copied: ${hex}`);
  };

  return (
    <div className="randomGenSection">
      {/* Generate Button */}
      <button
        onClick={generateColors}
        className="generateBtn"
      >
        Generate Random Colors
      </button>

      {/* Display Colors in a Single Row */}
      <div className="colorGenerated">
        <div className="colorGenRowCol">
          {colors.map((rgb, index) => {
            const hex = rgbToHex(rgb);
            const textColor = getTextColor(rgb);

            return (
              <button
                key={index}
                type="button"
                className="randomColorCard"
                style={{ backgroundColor: hex, color: textColor }}
                onClick={() => copyHexToClipboard(hex)}
                onMouseEnter={() => setHoverHex(hex)}
                onMouseLeave={() => setHoverHex(null)}
                tabIndex={0}
                aria-label={`Copy color ${hex}`}
              >
                <span
                  className={`hexText ${hoverHex === hex ? "opacity-100" : "opacity-0"
                    }`}
                  style={{ color: textColor, backgroundColor: "rgba(0,0,0,0.3)" }}
                >
                  {hex}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
