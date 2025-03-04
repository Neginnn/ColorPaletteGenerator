import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { ColorPaletteStyles } from "./styles";
export const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState([
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
  ]);

  const generatePalette = async () => {
    try {
      // Generate a random hex color
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);

      const response = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${randomColor}&mode=analogic&count=4`
      );
      const data = await response.json();

      setColors(data.colors.map((color: any) => color.hex.value));
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  const copyToClipboard = (color: any) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color} to clipboard!`);
  };

  return (
    <ColorPaletteStyles>
      <div className="container">
        <h1 className="title">AI-Powered Color Palette Generator</h1>
        <motion.button
          whileHover={{ opacity: 0.9 }}
          whileTap={{ opacity: 0.9 }}
          className="button"
          onClick={generatePalette}
        >
          Generate Palette
        </motion.button>
        <div className="palette-grid">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{ backgroundColor: color }}
              className="color-box"
              onClick={() => copyToClipboard(color)}
            >
              {color}
            </motion.div>
          ))}
        </div>
      </div>
    </ColorPaletteStyles>
  );
};
