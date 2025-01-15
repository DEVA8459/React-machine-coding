import "../style/body.css";
import GreenStarSvg from "../assets/GreenStarSvg";

import { useSelector } from "react-redux";
import {ContainerShimmer} from "./restContainerShimer"
import { Link } from "react-router-dom";

export const RestaurentContainer = () => {
  // const restaurent =data?.card?.card?.gridElements?.infoWithStyle?.restaurants
  // console.log(restaurent);
 
  const {restaurants ,title} =useSelector((state)=>state.restaurant)
  console.log(restaurants)

  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"; 

  return (
    <div className="restaurant-container">
      
      <div className="header">{title}</div>
      <div className="content">
        {restaurants.length >0 ? (restaurants.map((items) => {
          return (
            
            
            <div key={items.info.id} className="card"><Link to={`/restaurents/${items.info.id}`}>
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
              </div></Link>
            </div>
          );
        })):(<ContainerShimmer/>)}
      </div>
    </div>
  );
};
