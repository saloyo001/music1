Melody Music App

Project Description

Melody is a simple music application built using React. It displays a navigation bar, a welcome section, featured music, playlists and a footer.

The purpose of this project is to understand React components and how to use named and default exports.

Components

This project contains five React components:

Navbar – Displays the navigation links.

Welcome – Displays a welcome message to users.

FeaturedMusic – Displays featured songs and their artists.

Playlist – Displays different music playlists.

Footer – Displays copyright information.

Named Exports vs Default Exports

React uses JavaScript's export and import features to allow us to share components between different files.

1. Default Exports

A default export allows us to export one main value from a file.

Example:

function Navbar() {
  return <h2>Melody</h2>;
}

export default Navbar;

To import a default export, we do not use curly brackets.

import Navbar from "./components/Navbar";

2. Named Exports

Named exports allow us to export values using their specific names. A file can have multiple named exports.

Example:

export function Playlist() {
  return <h2>My Playlists</h2>;
}

To import a named export, we use curly brackets.

import { Playlist } from "./components/Playlist";

3. Main Difference

The main difference is how we export and import components.

Default exports are imported without curly brackets.

Named exports are imported with curly brackets.

A file can have one default export but multiple named exports.

Exports Used in This Project

Component

Export Type

Navbar

Default

Welcome

Default

FeaturedMusic

Default

Playlist

Named

Footer

Named

Technologies Used

React

JavaScript

HTML

CSS

Vite

How to Run the Project

Install Node.js.

Open the project in VS Code.

Open the terminal.

Run npm install to install dependencies.

Run npm run dev to start the development server.

Open the local URL provided by Vite in your browser.

Conclusion

This project helped me understand how to create reusable React components, import and export components between files, and combine multiple components inside a top-level component.