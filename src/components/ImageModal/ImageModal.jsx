import Modal from "react-modal";
import { useSearch } from "../../searchContext";
const { modalIsOpen } = useSearch();
function ImageModal({ children }) {
  return <Modal isOpen={modalIsOpen}>{children}</Modal>;
}
export default ImageModal;
