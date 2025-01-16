import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../reducer/cartSlice";
import { FaRegHandPointDown } from "react-icons/fa";
import { CLOUDINARY__IMAGE_PREFIX } from "../../utils/constant";
export const MenuCat = ({ data }) => {
  const { title } = data;
  const itemCards = data?.itemCards || data?.categories[0]?.itemCards || [];

  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="menu-container">
      <div className="menu-container-content-title">
        <h3>{`${title} ${itemCards.length}`}</h3>
        <div onClick={toggle}>
          <FaRegHandPointDown />
        </div>
      </div>
      <div className="menuCat">
        {isExpanded &&
          itemCards.map(({ card: { info } }, index) => {
            return (
              <div key={index} className="menu">
                <div className="img">
                  <img src={`${CLOUDINARY__IMAGE_PREFIX}${info.imageId}`} />
                  <button
                    onClick={() => {
                      dispatch(addItems(info));
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div className="info">
                  <p className="name">{info.name}</p>
                  <div className="price">
                    <span>&#8377;</span>
                    <p>{info.price / 100 || info.defaultPrice / 100}</p>
                  </div>
                  <div className="description">{info.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
