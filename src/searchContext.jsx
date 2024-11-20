import { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const useSearch = () => useContext(searchContext);

export const SearchProvider = ({ children }) => {
  const [firstSearch, setFirstSearch] = useState("");
  const [firstObj, setFirstObj] = useState("");
  const [counter, setCounter] = useState(1);
  const [total_pages, setTotal_pages] = useState(null);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [showError, setShowError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState({});

  return (
    <searchContext.Provider
      value={{
        firstSearch,
        setFirstSearch,
        setFirstObj,
        firstObj,
        setCounter,
        loaderVisible,
        setLoaderVisible,
        showError,
        setShowError,
        counter,
        total_pages,
        setTotal_pages,
        modalIsOpen,
        setModalIsOpen,
        setCurrentImg,
        currentImg,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
