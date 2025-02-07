import { useSelector } from "react-redux";
import MovieListCard from "./MovieListCard";

const NowPlaying = () => {
  const movieData = useSelector((store) => store.movies);
  const data = movieData?.nowPlayingMovies?.data?.results;

  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-white mb-4">Now Playing</p>
      
      {/* Horizontal Scroll Container */}
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden p-2">
        {data &&
          data.map((movie) => (
            <MovieListCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default NowPlaying;
