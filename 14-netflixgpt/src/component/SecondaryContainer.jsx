import NowPlaying from "./NowPlaying";

const SecondaryContainer = () => {
  return (
    <div className="bg-black flex flex-col w-screen">
      <div className="z-30  -mt-[250px]">
        <NowPlaying />
        <NowPlaying />
        <NowPlaying />
        <NowPlaying />
        <NowPlaying />
        <NowPlaying />
      </div>
        
     
    </div>
  );
};

export default SecondaryContainer;
