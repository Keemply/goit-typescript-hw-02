import { createContext, useContext, useEffect, useState } from "react";
import getPhotos from "./unsplashApi";
const searchContext = createContext();

export const useSearch = () => useContext(searchContext);

export const SearchProvider = ({ children }) => {
  const [firstSearch, setFirstSearch] = useState("");
  const [firstObj, setFirstObj] = useState("");
  const [counter, setCounter] = useState(1);
  const [total_pages, setTotal_pages] = useState(null);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [showError, setShowError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  function initFirstSearch(val) {
    setFirstSearch(val);
  }
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
    console.log(total_pages);
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
    <searchContext.Provider
      value={{
        initFirstSearch,
        firstObj,
        setCounter,
        loaderVisible,
        setLoaderVisible,
        showError,
        counter,
        total_pages,
        modalIsOpen,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
