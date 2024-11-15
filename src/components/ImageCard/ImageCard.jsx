function ImageCard({ item }) {
  return (
    <div>
      <img src={item.urls.regular} alt={item.alt_description} />
    </div>
  );
}
export default ImageCard;
