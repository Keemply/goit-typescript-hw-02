import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { useSearch } from "./searchContext";
import ReactModal from "react-modal";
import getPhotos from "./unsplashApi";
import { useEffect } from "react";
import "./App.css";
ReactModal.setAppElement("#root");
function App() {
  const {
    firstSearch,
    firstObj,
    setFirstObj,
    loaderVisible,
    setLoaderVisible,
    showError,
    setShowError,
    counter,
    setCounter,
    total_pages,
    setTotal_pages,
  } = useSearch();
  useEffect(() => {
    if (firstSearch !== "") {
      doSearchFirst();
    }
  }, [firstSearch]);

  async function doSearchFirst() {
    try {
      setLoaderVisible(true);
      const result = await getPhotos(firstSearch);
      setLoaderVisible(false);
      setTotal_pages(result.total_pages);
      setCounter(1);
      setFirstObj(result.results);
    } catch (error) {
      setLoaderVisible(false);
      setShowError(true);
      console.log(error);
    }
  }
  useEffect(() => {
    if (counter > 1 && counter < total_pages) {
      loadMore(counter);
    }
  }, [counter]);
  async function loadMore(counter) {
    try {
      setLoaderVisible(true);
      const result = await getPhotos(firstSearch, counter);
      setLoaderVisible(false);
      setFirstObj((pref) => {
        return [...pref, ...result.results];
      });
    } catch (error) {
      console.log(error);
      setLoaderVisible(false);
      setShowError(true);
    }
  }
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <ImageGallery />
      <ImageModal />
      {showError && <ErrorMessage />}
      {loaderVisible && <Loader />}
      {firstObj !== "" && counter < total_pages && <LoadMoreBtn />}
    </>
  );
}
export default App;
