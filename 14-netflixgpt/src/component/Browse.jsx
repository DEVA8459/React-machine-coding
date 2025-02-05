import Header from "./Header";

import { useDispatch } from "react-redux";
import { getMoviesNow } from "../utils/reducer/movieSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useMoviesFetch from "../utils/customHook/useMoviesFetch";
import { useEffect } from "react";

const Browser = () => {
  const dispatch = useDispatch();

  const result = useMoviesFetch(
    `https://api.themoviedb.org/3/movie/now_playing?page=1`
  );

  console.log("result", result);
  useEffect(() => {
    dispatch(getMoviesNow(result));
  }, [dispatch, result]);

  return (
    <div className="flex flex-col">
      <div className="z-40 fixed">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer  />
    </div>
  );
};

export default Browser;
