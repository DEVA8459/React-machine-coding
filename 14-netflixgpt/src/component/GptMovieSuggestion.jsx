import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return;
  if (!movieResults) return;
  console.log("mr", movieResults);

  return (
    <div className="rounded-3xl bg-black text-white mt-16">
  <p className="p-1 m-4 text-3xl font-bold text-white">GPT Movie Recommendations</p>

  {/* Flex container with wrapping */}
  <div className="flex flex-wrap justify-center gap-6 p-3 m-2 rounded-lg shadow-md">
    {movieNames.map((name, index) => (
      <div key={index} className="w-full">
        {/* Category Title */}
        <h1 className="text-4xl font-bold text-white mb-4">{name}</h1>

        {/* Movie Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {movieResults[index]?.data?.map((items) => (
            <div
              key={items.id}
              className="relative w-[16rem] h-[20rem] cursor-pointer transition-transform transform hover:scale-105"
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

              {/* Movie Poster */}
              <img
                src={`https://image.tmdb.org/t/p/w500${items.poster_path || items.backdrop_path || <p className="text-white">No Image found</p>}`}
                alt={items.original_title}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />

              {/* Movie Title */}
              <p className="absolute bottom-2 left-2 text-white text-lg font-semibold z-10">
                {items.original_title}
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default GptMovieSuggestion;
