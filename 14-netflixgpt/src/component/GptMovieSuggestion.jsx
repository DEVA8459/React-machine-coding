import { useSelector } from "react-redux";
import MovieListCard from "./MovieListCard";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return;
  if (!movieResults) return;
 

  return (
    <div className=" flex flex-wrap rounded-3xl bg-black/65 text-white mt-16 p-4 w-full ">
    {movieNames.map((name, index) => (
      <div key={index} className="flex flex-wrap p-3 m-2 bg-black/50 rounded-2xl" >
        {/* Category Title */}
        <p className="text-3xl font-bold text-white mb-4">{name}</p>

        {/* Movie Cards */}
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden p-2 w-screen">
          {movieResults[index]?.data?.map((movie) => (
            <MovieListCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    ))}
  </div>

  );
};

export default GptMovieSuggestion;
