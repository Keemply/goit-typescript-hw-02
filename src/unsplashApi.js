import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] =
  "Client-ID kj612ohuBys0ZfnMAG9G5tjzPUkCHOibtwhQYgW0I-E";
async function getPhotos(search, page = 1) {
  const optionsApi = {
    params: {
      query: search,
      page,
      per_page: 12,
      orientation: "landscape",
    },
  };
  const searchRes = await axios("search/photos", optionsApi);

  return searchRes.data;
}
export default getPhotos;
