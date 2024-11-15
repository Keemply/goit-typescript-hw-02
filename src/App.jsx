import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { useSearch } from "./searchContext";
import "./App.css";

function App() {
  const { firstObj } = useSearch();
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <ImageGallery />
      {firstObj !== "" && <LoadMoreBtn />}
    </>
  );
}
export default App;
