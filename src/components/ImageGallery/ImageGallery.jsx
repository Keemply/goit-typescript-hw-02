import ImageCard from "../ImageCard/ImageCard";
import { useSearch } from "../../searchContext";
import css from "./ImageGallery.module.css";
function ImageGallery() {
  const { firstObj } = useSearch();

  return (
    <ul className={css.ul}>
      {firstObj !== "" &&
        firstObj.map((item) => {
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
