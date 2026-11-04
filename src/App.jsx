import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import FeaturedMusic from "./components/FeaturedMusic";

import { Playlist } from "./components/Playlist";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <FeaturedMusic />
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;