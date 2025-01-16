import { useDispatch, useSelector } from "react-redux";
import "../style/Search.css";
import { setText } from "../reducer/SearchTermSlice";
import GreenStarSvg from "../assets/GreenStarSvg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SearchComponent = () => {
  const { restro, searchText } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

  // Local state to track whether the user has started searching
  const [hasSearched, setHasSearched] = useState(false);

  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  // Access the correct nested restaurants data
  const restauren =
    Array.isArray(restro?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ? restro.cards[4].card.card.gridElements.infoWithStyle.restaurants
      : [];

  const TopRestroInCity =
    Array.isArray(restro?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ? restro.cards[1].card.card.gridElements.infoWithStyle.restaurants
      : [];

  const AllArr = [...restauren, ...TopRestroInCity]; // Merge both arrays

  // Filter the restaurants based on searchText
  const filteredRestaurent = AllArr.filter((items) =>
    items?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  // Update searchText and manage 'hasSearched' state
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    dispatch(setText(searchValue));
    setHasSearched(searchValue.length > 0); // Set to true if input is not empty
  };

  // Reset search results if the searchText is empty
  useEffect(() => {
    if (searchText === "") {
      setHasSearched(false); // Reset the search state if searchText is cleared
    }
  }, [searchText]);

  return (
    <div className="search">
      {/* Search Input */}
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search your restaurant here..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      {/* Display filtered restaurants only after search is performed */}
      {hasSearched && (
        <div className="content">
          {filteredRestaurent.length > 0 ? (
            filteredRestaurent.map((items) => (
              <div key={items.info.id} className="card">
                <Link to={`/restaurents/${items.info.id}`}><img
                  src={IMG_CDN_URL + items.info.cloudinaryImageId}
                  alt={items.info.name}
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
            ))
          ) : (
            <div>No restaurant found</div>
          )}
        </div>
      )}
    </div>
  );
};
