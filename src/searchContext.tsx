import React from "react";
import { createContext, useContext, useState } from "react";
import getPhotos from "./unsplashApi";
import { useEffect } from "react";
export type ImgObj = {
  id: number,
  image: string,
  urls: {
    small: string,
    regular: string
  },
  alt_description: string
}
type UserContextProps = {
  firstSearch: string,
  firstObj: ImgObj[],
  setFirstObj: React.Dispatch<React.SetStateAction<ImgObj[]>>
  counter: number,
  total_pages: number,
  setTotal_pages: React.Dispatch<React.SetStateAction<number>>,
  loaderVisible: boolean,
  setLoaderVisible: React.Dispatch<React.SetStateAction<boolean>>,
  showError: boolean,
  setShowError: React.Dispatch<React.SetStateAction<boolean>>,
  modalIsOpen:boolean,
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  currentImg: Partial<ImgObj>,
  setCurrentImg: React.Dispatch<React.SetStateAction<object>>,
  getSearchQuery: (val: string) => void,
  loadMoreHandler: () => void
}
type Props = {
  children: React.ReactNode;
}
const searchContext = createContext<UserContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(searchContext);
  if (context === undefined) {
  throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const SearchProvider = ({ children }: Props) => {
  const [firstSearch, setFirstSearch] = useState<string>("");
  const [firstObj, setFirstObj] = useState<ImgObj[]>([]);
  const [counter, setCounter] = useState<number>(1);
  const [total_pages, setTotal_pages] = useState<number>(0);
  const [loaderVisible, setLoaderVisible] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<Partial<ImgObj>>({});

  function getSearchQuery(val: string) {
    setFirstSearch(val);
    setCounter(1);
    setFirstObj([]);
    setTotal_pages(0);
  }
  useEffect(() => {
    if (firstSearch !== "") {
      async function wrapper() {
        try {
          setLoaderVisible(true);
          const result = await getPhotos(firstSearch, counter);
          setLoaderVisible(false);
          setTotal_pages(result.total_pages);
          setFirstObj((pref) => {
            return [...pref, ...result.results];
          });
        } catch (error) {
          setLoaderVisible(false);
          setShowError(true);
        }
      }
      wrapper();
    }
  }, [firstSearch, counter]);
  function loadMoreHandler() {
    setCounter((pref) => pref + 1);
  }
  return (
    <searchContext.Provider
      value={{
        firstSearch,
        firstObj,
        setFirstObj,
        counter,
        total_pages,
        setTotal_pages,
        loaderVisible,
        setLoaderVisible,
        showError,
        setShowError,
        modalIsOpen,
        setModalIsOpen,
        currentImg,
        setCurrentImg,
        getSearchQuery,
        loadMoreHandler
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
