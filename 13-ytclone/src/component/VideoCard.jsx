export const VideoCard = ({ info }) => {
  
  if (!info || !info.snippet || !info.statistics) {
    return <div>Invalid video data</div>;
  }
  const { snippet, statistics } = info;

  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className=" pt-4 w-72 p-2 shadow-lg h- text-ellipsis truncate ">
      <img src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold ">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// higher Order function

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-500">
      <VideoCard info={info}/>
    </div>
  );
};
