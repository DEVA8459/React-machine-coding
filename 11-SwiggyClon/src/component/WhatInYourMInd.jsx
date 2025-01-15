import {
  CLOUDINARY__IMAGE_PREFIX,
  DEFAULT_FOOD_IMAGE_URL,
} from "../utils/constant";
import "../style/wimc.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const MOVE_COUNT = 1;
const MAX_RIGHT_CLICK_VALUE = 4;
const MAX_LEFT_CLICK_VALUE = -2;
const WhatInYourMindCarousel = ({ data }) => {
  const title = data?.header?.title;

  const slides = data?.imageGridCards?.info;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [style, setStyle] = useState({});
  if (!slides?.length) return;

  const HandleNext = () => {
    if (currentSlide < MAX_RIGHT_CLICK_VALUE) {
      if (currentSlide < 0) {
        setCurrentSlide(1);
        setStyle({ transform: `translateX(-${currentSlide * 10}%)` });
      } else {
        setCurrentSlide((prev) => prev + MOVE_COUNT);
        setStyle({ transform: `translateX(-${currentSlide * 10}%)` });
      }
    }
  };
  const HandlePrevious = () => {
    if (currentSlide > MAX_LEFT_CLICK_VALUE) {
      setCurrentSlide((prev) => prev - MOVE_COUNT);
      setStyle({ transform: `translateX(-${currentSlide * 10}%)` });
    }
  };
  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <div>{title}</div>
        <div className="scroll-arrow">
          <span onClick={HandlePrevious}>
            <FaArrowLeft />
          </span>
          <span onClick={HandleNext}>
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-inner" style={style}>
          {slides.map(({ imageId }) => (
            <div key={imageId}>
              <div className="image">
                <img
                  src={
                    imageId
                      ? `${CLOUDINARY__IMAGE_PREFIX}${imageId}`
                      : DEFAULT_FOOD_IMAGE_URL
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatInYourMindCarousel;
