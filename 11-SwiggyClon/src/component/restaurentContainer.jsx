import "../style/body.css";
import GreenStarSvg from "../assets/GreenStarSvg";
export const RestaurentContainer = ({ title, restaurent }) => {
  // const restaurent =data?.card?.card?.gridElements?.infoWithStyle?.restaurants
  console.log(restaurent);

  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  if (!restaurent || restaurent.length === 0) {
    return <div>No rest Found</div>;
  }

  return (
    <div className="restaurant-container">
      <div className="header">{title}</div>
      <div className="content">
        {restaurent.map((items) => {
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
        })}
      </div>
    </div>
  );
};
