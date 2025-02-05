import { useSelector } from "react-redux";

const NowPlaying = () => {
  const movieData = useSelector((store) => store.movies);

  const data = movieData?.nowPlayingMovies?.data?.results;
  console.log("sc", movieData);
  return (
    <div>
        <p className="p-1 m-4 text-3xl font-bold text-white">Now PLaying</p>
        <div className="flex w-screen h-[20rem] p-3 m-2 rounded-lg shadow-md overflow-x-scroll scrollbar-hide space-x-4 scrollbar-hidden">
  {data &&
    data.map((movie) => (
      <div
        key={movie.id}
        className="relative min-w-[16rem] h-full cursor-pointer transition-transform transform hover:scale-110"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          className="w-full h-full object-cover rounded-lg shadow-md"
          alt={movie.title}
        />

        {/* Movie Title */}
        <p className="absolute bottom-2 left-2 text-white text-xl font-semibold z-10">
          {movie.title}
        </p>
      </div>
    ))}
</div>
    </div>
    
  );
};

export default NowPlaying;
