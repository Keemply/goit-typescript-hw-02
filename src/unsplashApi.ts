import axios from "axios";
import { ImgObj } from "./searchContext";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] =
  "Client-ID kj612ohuBys0ZfnMAG9G5tjzPUkCHOibtwhQYgW0I-E";
interface Result {
    total_pages: number,
    results: ImgObj[]
  }
async function getPhotos(search: string, page = 1): Promise<Result> {
  const optionsApi = {
    params: {
      query: search,
      page,
      per_page: 12,
      orientation: "landscape",
    },
  };
  const searchRes = await axios<Result>("search/photos", optionsApi);
console.log(searchRes);

  
  return searchRes.data;
}
export default getPhotos;
