import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <ImageGallery />
    </>
  );
}

export default App;
