import css from "./SearchBar.module.css";
import { useSearch } from "../../searchContext";
import toast, { Toaster } from "react-hot-toast";
import React, { FormEvent } from "react";

const notify = () =>
  toast("Необхідно ввести текст для пошуку зображень!", {
    style: {
      backgroundColor: "grey",
      color: "white",
    },
  });
function SearchBar() {
  const { getSearchQuery } = useSearch();
  function submitHandler(e: FormEvent) {
    const form = e.target as HTMLFormElement
    e.preventDefault();
    const searchValue = (form.elements[0] as HTMLInputElement).value;

    if (searchValue.trim() !== "") {
      getSearchQuery(searchValue.trim());
    } else {
      notify();
    }
    form.reset();
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
