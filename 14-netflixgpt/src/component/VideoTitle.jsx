const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute top-0 left-0  text-white w-screen aspect-video bg-black/40 z-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white  p-2  m-4 w-24 rounded-xl text-black font-medium hover:bg-gray-300">▶PLay</button>
        <button  className="bg-gray-400/50 p-2 m-2 w-24 rounded-xl text-white">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
