import {
  CLOUDINARY__IMAGE_PREFIX,
  DEFAULT_FOOD_IMAGE_URL,
} from "../utils/constant";
import "../style/wimc.css";
const WhatInYourMindCarousel = ({ data }) => {
  const title = data?.header?.title;

  const slides = data?.imageGridCards?.info;
  if (!slides?.length) return;

  return (
    <div className="carousel-container">
      <div className="header">{title}</div>
      <div className="carousel">
        <div className="carousel-inner">
          {slides.map(({ imageId }) => (
            <div key={imageId}>
                <div className="image"><img
                src={
                  imageId
                    ? `${CLOUDINARY__IMAGE_PREFIX}${imageId}`
                    : DEFAULT_FOOD_IMAGE_URL
                }
                
              /></div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatInYourMindCarousel;