import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../reducer/cartSlice";
export const MenuCat = ({ data }) => {
  
  const { title } = data;
  const itemCards = data?.itemCards || data?.categories[0]?.itemCards || [];
  

  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <span onClick={toggle}>
        <h1>{`${title}`}</h1>
      </span>
      <div>
        {isExpanded &&
          itemCards.map(({ card: { info } }, index) => {
            return (
              <div key={index}>
                {/* {console.log(info)} */}
                <p>{info.name}</p>
                <p>{info.price}</p>
                <button
                  onClick={() => {
                    // console.log("dispatching" ,info.name)
                    dispatch(addItems(info));
                   
                  }}
                >
                  ADD
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
