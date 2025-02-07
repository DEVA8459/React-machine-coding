import { TOP_RATED_MOVIES } from "../utils/constants";
import useMoviesFetch from "../utils/customHook/useMoviesFetch";
import MovieListCard from "./MovieListCard";

const TopRated = () => {
  const TopRatedMovies = useMoviesFetch(TOP_RATED_MOVIES);

  if (!TopRatedMovies) return;
  console.log("POP", TopRatedMovies);
  const data = TopRatedMovies?.data?.results;
  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-white mb-4">TopRated Movies</p>

      {/* Horizontal Scroll Container */}
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden p-2">
        {data &&
          data.map((movie) => <MovieListCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default TopRated;
