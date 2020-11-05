import { useEffect, useState } from "react";
import Youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  //equivalent to Component did mount
  const search = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  
  return [videos, search]
};

export default useVideos;
