import { useSearch } from "../../searchContext";
import React from "react";
function LoadMoreBtn() {
  const { loadMoreHandler } = useSearch();
  function clickHandler() {
    loadMoreHandler();
  }
  return (
    <button type="button" onClick={clickHandler}>
      Load more
    </button>
  );
}
export default LoadMoreBtn;
