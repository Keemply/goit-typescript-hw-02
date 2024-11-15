import css from "./SearchBar.module.css";
import { useSearch } from "../../searchContext";
function SearchBar() {
  const { initFirstSearch } = useSearch();
  function submitHandler(e) {
    e.preventDefault();
    const searchValue = e.target[0].value;

    initFirstSearch(searchValue.trim());
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
      </form>
    </div>
  );
}
export default SearchBar;
