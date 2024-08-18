import React, { useState, useEffect, useCallback, useContext } from "react";
import ResCard, {withPromotedTag} from "./ResCard"
import ShimmerCard from "./ShimmerCard";
import { NavLink } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {

  const [restaurantListUI, setRestaurantListUI] = useState([]);
  const [searchText,setSearchText] = useState(null);
  const [restaurantData,setRestaurantData] = useState([]);
  const onlineStatus = useOnlineStatus();
  const {user,setUser} = useContext(UserContext);

  useEffect(() => {
    fetchRestaurantData();
  }, [])

  if(!onlineStatus) return <h1>No internet connection.</h1>  

  const fetchRestaurantData = async () => {
    const res = await fetch(RESTAURANT_LIST_URL);
    const json = await res.json();
    const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantData(data)
    setRestaurantListUI(data);
    console.log(data);
  }

  console.log("calling body Render");

  const handleSearch = () => {
    if(searchText)
    {
      setRestaurantListUI(restaurantData.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase())))
    }
    else{
      setRestaurantListUI(restaurantData);
    }
  }

  const PromotedResCard = withPromotedTag(ResCard);

  return (
  <div className="my-16 container mx-auto">
  <h1 className="text-3xl mb-10">
    Welcome 
     {user}
  </h1>

  <h1>
    <label htmlFor="username">Update User</label>
    <input value={user} onChange={(e)=>setUser(e.target.value)}></input>
  </h1>
    <div class="relative text-lg bg-transparent text-gray-800 w-[400px]">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input class="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none" value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search" />
        <button type="submit" class="absolute right-0 px-4 py-2 text-white bg-teal-500" onClick={handleSearch}>
          Submit
        </button>
      </div>
    </div>

    {/* <div className="mt-16 mb-8">
      <h4>{searchText && restaurantListUI.length !== restaurantData.length ? "Showing results for " + "'" + searchText +  "'" : restaurantListUI.length === restaurantData.length ? "Showing all restaurants":""}</h4>
    </div> */}
   
     {
      restaurantListUI.length == 0 ? 
       <ShimmerCard  /> :
      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
      {restaurantListUI.map((restaurant, index) => (
        <NavLink key={index} className="flex w-full" to={`/restaurant/${restaurant.info.id}`}>
        {
          restaurant.info?.isOpen ? 
          <PromotedResCard restaurant={restaurant} /> : <ResCard restaurant={restaurant}
        />
        }
        </NavLink>
      ))}
    </div>
     } 
  </div>
  )
}

export default Body;
