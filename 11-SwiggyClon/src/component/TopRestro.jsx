
import GreenStarSvg from "../assets/GreenStarSvg";
import { Link } from "react-router-dom";

export const TopRestaurentInCity = ({ data }) => {
    const title = data?.header?.title;
    const TopRestroData = data?.gridElements?.infoWithStyle?.restaurants;
    console.log("topData", TopRestroData);
    const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    if (!TopRestroData > 0) return;
    return (
      <div className="restaurant-container">
        <div className="header">{title}</div>
        <div className="content">
          {TopRestroData.map((items) => {
            return  <div key={items.info.id} className="card"><Link to={`/restaurents/${items.info.id}`}>
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
          })}
        </div>
      </div>
    );
  };
  