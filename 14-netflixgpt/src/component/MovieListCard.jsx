import { Link } from "react-router-dom"

const MovieListCard = ({movie}) => {
  return (
    <Link to={`/displaypage/${movie.id}`}>
    <div
    key={movie.id}
    className="relative min-w-[12rem] sm:min-w-[14rem] md:min-w-[16rem] lg:min-w-[18rem] xl:min-w-[20rem] h-[20rem] cursor-pointer transition-transform transform hover:scale-110"
  >
    
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

    {/* Movie Poster */}
    <img
      src={movie.backdrop_path || movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}` 
        : "https://www.iconpacks.net/icons/4/free-no-image-icon-14596-thumb.png"}
      className="w-full h-full object-cover rounded-lg shadow-md"
      alt={movie.name}
    />

    {/* Movie Title */}
    <p className="absolute bottom-2 left-2 text-white text-lg font-semibold z-10">
      {movie.title}
    </p>
  </div></Link>
  )
}

export default MovieListCard