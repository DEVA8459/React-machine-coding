import NowPlaying from "./NowPlaying";

const SecondaryContainer = () => {
  return (
    <div className="bg-black flex flex-col w-screen">
      <div className="z-10  md:-mt-[250px] xl:-mt-[250px] lg:-mt-[250px] 2xl:-mt-[250px]">
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
