import css from "./SearchBar.module.css";
import { useSearch } from "../../searchContext";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Необхідно ввести текст для пошуку зображень!", {
    style: {
      backgroundColor: "grey",
      color: "white",
    },
  });
function SearchBar() {
  const { initFirstSearch, setFirstObj } = useSearch();
  function submitHandler(e) {
    e.preventDefault();
    const searchValue = e.target[0].value;

    if (searchValue.trim() !== "") {
      setFirstObj("");
      initFirstSearch(searchValue.trim());
    } else {
      notify();
    }
    e.target.reset();
  }

  return (
    <div className={css.headerContainer}>
      <form className={css.form} onSubmit={submitHandler}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </div>
  );
}
export default SearchBar;
