export const RestaurentContainer =({restaurent})=>{
    const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return<div className="Rl">
         {restaurent.map((items) => {
        return (
          <div key={items.info.id} className="restaurant-card">
            <img src={IMG_CDN_URL + items.info.cloudinaryImageId} />
            <span>
              {items.info.name}
              {items.info.areaName}
              {items.info.cuisines}
            </span>
          </div>
        );
      })}

    </div>
}