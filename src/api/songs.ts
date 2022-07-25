import requests from "./request";
import qs from "qs";

//获取音乐url
export const reqSongs = (id: string) => {
  const query = qs.stringify({
    timestamp: Date.now(),
    id,
  });
  console.log(query);
  return requests.get("/song/url?" + query);
};
