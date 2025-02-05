// import { useEffect, useState } from "react";
// import { API_OPTIONS } from "../utils/constants";
import useMoviesFetch from "../utils/customHook/useMoviesFetch";

// import useVideoFetch from "../utils/customHook/useVideoFetch";

const VideoBAckground = ({ id }) => {
  const vidData = useMoviesFetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
  );
  const movieData =vidData?.data?.results
  const trailer = movieData?.filter((video) => video.type == "Trailer");
  const data = trailer?.length ? trailer[0] : vidData.data?.results[0];
  
  return (
    <div className="w-screen overflow-hidden">
      <iframe
      className=" w-screen aspect-video scale-150 "
        src={`https://www.youtube.com/embed/${data?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBAckground;

