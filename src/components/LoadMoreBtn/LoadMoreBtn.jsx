import { useSearch } from "../../searchContext";
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
