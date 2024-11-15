import { createContext, useContext, useEffect, useState } from "react";
import getPhotos from "./unsplashApi";
const searchContext = createContext();

export const useSearch = () => useContext(searchContext);

export const SearchProvider = ({ children }) => {
  const [firstSearch, setFirstSearch] = useState("");
  const [firstObj, setFirstObj] = useState("");
  const [counter, setCounter] = useState(1);
  const [total_pages, setTotal_pages] = useState(null);
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
      const result = await getPhotos(firstSearch);
      setTotal_pages(result.total_pages);

      setFirstObj(result.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log(total_pages);
    if (counter > 1 && counter < total_pages) {
      loadMore(counter);
    }
  }, [counter, total_pages]);
  async function loadMore(counter) {
    console.log(counter);
    const result = await getPhotos(firstSearch, counter);
    setFirstObj((pref) => {
      return [...pref, ...result.results];
    });
  }
  return (
    <searchContext.Provider value={{ initFirstSearch, firstObj, setCounter }}>
      {children}
    </searchContext.Provider>
  );
};
