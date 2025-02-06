import Header from "./Header";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesNow } from "../utils/reducer/movieSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useMoviesFetch from "../utils/customHook/useMoviesFetch";
import { useEffect } from "react";
import GptSearch from "./GptSearch";

const Browser = () => {
  const dispatch = useDispatch();
  const showGPT = useSelector((store) => store.movies.toggleGPT);

  const result = useMoviesFetch(
    `https://api.themoviedb.org/3/movie/now_playing?page=1`
  );
  useEffect(() => {
    dispatch(getMoviesNow(result));
  }, [dispatch, result]);

  return (
    <div className="flex flex-col bg-black ">
      <div className="z-30 ">
        <Header />
      </div>
      {showGPT ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> 
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
