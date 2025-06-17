
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar/Navbar'
import RandomColorGenerator from "./components/RandomColorBtn/RandomColorGenerator";
import MoodInput from "./components/MoodInput/MoodInput";
import PaletteDisplay from "./components/PaletteDisplay/PaletteDisplay";
import { fetchPalette } from "./utils/fetchPalette";
// import { savePalette } from "./utils/savePalette";
import { fetchPalettes } from "./utils/fetchPalettes";
import './App.css'

function App() {
  const [colors, setColors] = useState([]);
  const [palette, setPalette] = useState(null);
  const [savePalette, setSavePalette] = useState([]);

  useEffect(() => {
    const loadPalettes = async () => {
      const palettes = await fetchPalettes();
      setSavePalette(palettes);
    };
    loadPalettes();
  }, []);

  const generatePalette = async (mood, description) => {
    const result = await fetchPalette(mood, description);
    setPalette(result);
  };

  return (
    <div className="App">
      <Navbar />
      <div>
        <MoodInput fetchPalette={generatePalette} />
        {palette && <PaletteDisplay palette={palette} />}
        {savePalette.map((p, index) => (
          <PaletteDisplay key={index} palette={p} />
        ))}
        <hr></hr>
        <RandomColorGenerator />

      </div>
    </div>
  )
}

export default App
