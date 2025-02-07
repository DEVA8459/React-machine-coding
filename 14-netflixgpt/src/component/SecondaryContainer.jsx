import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import TopRated from "./TopRated";
import Trending from "./Trending";
import TVTopRated from "./TVTopRated";
import Upcoming from "./Upcoming";

const SecondaryContainer = () => {
  return (
    <div className="bg-black flex flex-col w-screen">
      <div className="z-10  md:-mt-[250px] xl:-mt-[250px] lg:-mt-[250px] 2xl:-mt-[250px]">
        <NowPlaying />
        <Trending />
        <TVTopRated/>
        <TopRated />
        <Upcoming />
        <PopularMovies />
      </div>
    </div>
  );
};

export default SecondaryContainer;
