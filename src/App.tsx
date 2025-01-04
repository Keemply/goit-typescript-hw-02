import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { useSearch } from "./searchContext";
import ReactModal from "react-modal";
import React from "react";
import "./App.css";
ReactModal.setAppElement("#root");
function App() {
  const {
    loaderVisible,
    showError,
    counter,
    total_pages,
  } = useSearch();

  return (
    <div>
      <header>
        <SearchBar />
      </header>
      <ImageGallery />
      <ImageModal />
      {showError && <ErrorMessage />}
      {loaderVisible && <Loader />}
      {counter < total_pages && <LoadMoreBtn />}
    </div>
  );
}
export default App;
