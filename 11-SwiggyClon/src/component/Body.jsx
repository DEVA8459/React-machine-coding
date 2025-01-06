import "../style/restaurentCard.css";
import { useEffect, useState } from "react";
import { RestaurentContainer } from "./restaurentContainer";
export const Body = () => {
  const [restaurent, setRestaurent] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const result = await response.json();
    console.log(result);
    setRestaurent(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="Rl">
      <RestaurentContainer restaurent={restaurent} />
    </div>
  );
};
