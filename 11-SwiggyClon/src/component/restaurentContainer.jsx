import "../style/body.css";
import GreenStarSvg from "../assets/GreenStarSvg";

import { useSelector } from "react-redux";

export const RestaurentContainer = () => {
  // const restaurent =data?.card?.card?.gridElements?.infoWithStyle?.restaurants
  // console.log(restaurent);
 
  const {restaurants,searchText ,title} =useSelector((state)=>state.restaurant)
  console.log(restaurants)

  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  if (!restaurants || restaurants.length === 0) {
    return <div>No rest Found</div>;
  }

  const filteredRestaurent  = restaurants.filter((items)=>items.info.name.toLowerCase().includes(searchText.toLowerCase()))


  return (
    <div className="restaurant-container">
      
      <div className="header">{title}</div>
      <div className="content">
        {filteredRestaurent.length >0 ? (filteredRestaurent.map((items) => {
          return (
            
            <div key={items.info.id} className="card">
              <img
                src={IMG_CDN_URL + items.info.cloudinaryImageId}
                className="card-image"
              />
              <div className="card-content">
                <h2>{items.info.name}</h2>
                <span>
                  <GreenStarSvg />
                  {items.info.avgRating}
                </span>
                <p>{items.info.areaName}</p>
                <p>{items.info.cuisines}</p>
              </div>
            </div>
          );
        })):(<div>no restaurent found</div>)}
      </div>
    </div>
  );
};
