import { useSearch } from "../../searchContext";
function LoadMoreBtn() {
  const { setCounter } = useSearch();
  function clickHandler() {
    setCounter((pref) => pref + 1);
  }
  return (
    <button type="button" onClick={clickHandler}>
      Load more
    </button>
  );
}
export default LoadMoreBtn;
