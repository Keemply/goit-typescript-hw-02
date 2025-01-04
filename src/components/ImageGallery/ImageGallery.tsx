import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { useSearch } from "../../searchContext";
import css from "./ImageGallery.module.css";

function ImageGallery() {
  const { firstObj } = useSearch();

  return (
    <ul className={css.ul}>
      {firstObj.length !== 0  &&
        firstObj.map((item)=> {
          return (
            <li key={item.id} className={css.li}>
              <ImageCard item={item} />
            </li>
          );
        })}
    </ul>
  );
}
export default ImageGallery;
