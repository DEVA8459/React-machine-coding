import { useEffect, useState } from "react";
import { YT_API } from "../constant/constant";
import { AdVideoCard, VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getData = async () => {
    const response = await fetch(YT_API);
    const result = await response.json();
    console.log("deva", result.items);
    return setVideos(result.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-wrap m-4 p-4 ">
      { videos && <AdVideoCard info ={videos[0]}/>}
      {videos.map((items) => (
        <Link to={"/watch?v=" + items.id} key={items.id}>
          <VideoCard info={items} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
