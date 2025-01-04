import { ImgObj, useSearch } from "../../searchContext";
import React from "react";
import css from "./ImageCard.module.css";

function ImageCard ({ item }: {item: ImgObj}) {
  const { setCurrentImg, setModalIsOpen } = useSearch();
  if (!item.urls) {
  return null
}

  function handleClick() {
    setCurrentImg(item);
    setModalIsOpen(true);
  }
  return (
    <div>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}
export default ImageCard;
