
import {TRENDING } from "../utils/constants"
import useMoviesFetch from "../utils/customHook/useMoviesFetch"
import MovieListCard from "./MovieListCard"

const Trending = () => {
    const PopularMovies=useMoviesFetch(TRENDING)

    if(!PopularMovies)return
    
    const data =PopularMovies?.data?.results
  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-white mb-4">Trending</p>
      
      {/* Horizontal Scroll Container */}
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden p-2">
        {data &&
          data.map((movie) => (
            <MovieListCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  )
}

export default Trending