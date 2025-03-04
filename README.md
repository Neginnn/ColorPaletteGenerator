AI-Powered Color Palette Generator

A React-based color palette generator that provides random, aesthetically pleasing color schemes using the The Color API. With this tool, users can easily generate and copy color palettes for use in UI/UX design, web, and app development.
Features

    AI-generated color schemes: Uses random hex values to generate analogic color schemes.
    Interactive UI: Displays color palettes that users can click to copy individual colors to the clipboard.
    Responsive: Optimized for modern web browsers, with a mobile-friendly design.
    Smooth animations: Hover and click animations powered by Framer Motion.
    Clipboard functionality: Quickly copy colors to your clipboard with a click, and get feedback via toast notifications.

Installation

    Clone the repository:

git clone https://github.com/Neginnn/ColorPaletteGenerator.git

Install dependencies:

yarn install

Start the development server:

    yarn dev

    Visit http://localhost:3070 in your browser to see the app in action.

Usage

    Click the Generate Palette button to create a new color palette.
    Click on any color in the palette to copy it to your clipboard.
    Colors are displayed in hex format.

How It Works

The ColorPaletteGenerator component fetches color schemes from the The Color API, generating an analogic color scheme based on a random hex color. The colors are displayed as clickable boxes, and when clicked, the color value is copied to the clipboard with a toast notification indicating success.
