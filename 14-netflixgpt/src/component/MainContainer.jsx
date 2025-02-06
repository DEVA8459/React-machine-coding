import { useSelector } from "react-redux";
import VideoBAckground from "./VideoBAckground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies);

  const data = movies?.nowPlayingMovies?.data?.results[19];
  if(!data)return
  const { original_title, overview, id } = data;
  return (
    <div >
      <VideoTitle title={original_title} overview={overview} />
      <VideoBAckground id={id} />
    </div>
  );
};
export default MainContainer;
