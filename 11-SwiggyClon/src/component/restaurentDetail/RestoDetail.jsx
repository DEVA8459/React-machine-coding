import { useParams } from "react-router-dom";
import useFetch from "../../customHook/useFetch";
import {
  SWIGGY_RESTAURANT_DETAIL_API_END_POINT,
  categoryType,
} from "../../utils/constant";
import { useEffect, useState } from "react";
import { MenuCat } from "./MenuCat";

export const RestroDetail = () => {
  const { id } = useParams();
  const url = `${SWIGGY_RESTAURANT_DETAIL_API_END_POINT}${id}`;
  const { data } = useFetch(url);
  
  const [menuItemCatgory, setMenuItemCategory] = useState([]);
  // const [showIndex, setShowIndex] = useState(0)

  useEffect(() => {
    if (data) {
      const itemCategory =
        data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          ({ card: { card } }) => {
            return (
              card["@type"] === categoryType.ITEM_CATEGORY ||
              card["@type"] === categoryType.NESTED_ITEM_CATEGORY
            );
          }
        );
      setMenuItemCategory(itemCategory || []);
    }
  }, [data]);
  return (
    <div>
      <h1 style={{ padding: "80px" }}>Restro Details {id}</h1>
      {menuItemCatgory.length > 0 ? (
        menuItemCatgory.map((catagory, index) => 
          // {console.log(catagory)}
          <MenuCat key={index} data={catagory.card.card} />
        )
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
