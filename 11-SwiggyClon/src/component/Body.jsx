
import { RestaurentContainer } from "./restaurentContainer";
import useFetch from "../customHook/useFetch";
import WhatInYourMindCarousel from "./WhatInYourMInd";
import "../style/restaurentCard.css"
import { useDispatch } from "react-redux";
import { setRestaurent } from "../reducer/SearchTermSlice";
import { useEffect } from "react";
import { TopRestaurentInCity } from "./TopRestro";

export const Body = () => {
 
  const dispatch =useDispatch()
  const {data}=useFetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  console.log(data)
  const restaurent =data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  
  const title =data?.cards[2]?.card?.card?.title
  const WhatInYourMind = data?.cards[0].card?.card
  const TopRestroInCity = data?.cards[1]?.card?.card;
  useEffect(()=>{
    if(restaurent){
    dispatch(setRestaurent({restaurent ,title}))}
  },[dispatch ,restaurent ,title])
  
  return (
    <div className="body">
      
      <WhatInYourMindCarousel data={WhatInYourMind}/>
      <TopRestaurentInCity data={TopRestroInCity}/>
      <RestaurentContainer  />
    </div>
  )
}
