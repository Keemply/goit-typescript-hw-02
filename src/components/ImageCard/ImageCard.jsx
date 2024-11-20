import { useSearch } from "../../searchContext";
import css from "./ImageCard.module.css";
function ImageCard({ item }) {
  const { setCurrentImg, setModalIsOpen } = useSearch();

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
