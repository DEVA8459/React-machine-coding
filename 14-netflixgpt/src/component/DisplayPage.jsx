import { useParams } from "react-router-dom";
import VideoBAckground from "./VideoBAckground";
import SecondaryContainer from "./SecondaryContainer";

import useMoviesFetch from "../utils/customHook/useMoviesFetch";
import Header from "./Header";
import Logo from "./Logo";

const DisplayPage = () => {
    const { id } = useParams();
    const Detail = useMoviesFetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
  
    return (
      <div className="bg-black text-white">
        <Logo/>
        {/* Main Container */}
        <div className="flex flex-col md:flex-row">
          {/* Video Section - 70% on larger screens */}
          <div className="w-full md:w-7/10">
            <VideoBAckground id={id} />
          </div>
  
          {/* Description Section - 30% on larger screens */}
          <div className="w-full md:w-3/10 p-4 border-l border-gray-600">
            <h1 className="text-2xl font-bold mb-2 ">Movie Detail</h1>
            <img src={Detail?.data?.backdrop_path ||Detail?.data?.poster_path 
        ? `https://image.tmdb.org/t/p/w500${Detail?.data?.backdrop_path || Detail?.data?.poster_path}` 
        : "https://www.iconpacks.net/icons/4/free-no-image-icon-14596-thumb.png"}/>
            <h1 className="text-white font-bold text-3xl">{Detail?.data?.original_title}</h1>
            <p className="text-gray-300 p-3">{Detail?.data?.overview}</p>
            <p className="text-gray-300 p-3">Rating :  {Detail?.data?.vote_average}</p>
            
          </div>
        </div>
  
        {/* Secondary Content */}
        <div className="mt-60">
          <SecondaryContainer />
        </div>
      </div>
    );
  };
  
  export default DisplayPage;
  
