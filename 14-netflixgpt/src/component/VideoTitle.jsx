const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-4 md:px-12 absolute top-0 left-0 text-white w-screen flex flex-col justify-center items-start aspect-video bg-black/30 z-10 mt-20 md:mt-0 xl:mt-0 2xl:mt-0">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">{title}</h1>

      {/* Overview */}
      <p className="py-2 text-xs sm:text-sm md:text-lg w-2/4  sm:w-3/4 md:w-1/2 lg:w-1/3">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex gap-2 sm:gap-4">
        <button className="bg-white px-3 py-2 w-24 sm:w-28 rounded-lg text-black font-medium hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="bg-gray-500/50 px-3 py-2 w-24 sm:w-28 rounded-lg hover:bg-gray-600/60 text-white transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
