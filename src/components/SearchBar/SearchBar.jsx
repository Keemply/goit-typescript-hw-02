import css from "./SearchBar.module.css";
import getPhotos from "../../unsplashApi";
function SearchBar() {
  function submitHandler() {}

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
