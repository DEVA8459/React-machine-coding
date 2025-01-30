import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/reducer/navSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-full flex-col ">
      <div className=" px-5 flex ">
        <div>
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default WatchPage;
