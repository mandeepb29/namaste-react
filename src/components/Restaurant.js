import { useParams } from "react-router-dom"
import ShimmerCard from "./ShimmerCard";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantMenu from "./RestaurantMenu";
import { IMG_CDN_URL } from "../utils/constants";
import { useState } from "react";
const Restaurant = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantDetails(resId);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  const updateMenuIndex = (index) => {
    if(index === selectedMenuIndex) setSelectedMenuIndex(null);
    else setSelectedMenuIndex(index);
  }

  if (resInfo == null) return <ShimmerCard />;

  const { name, city, locality, areaName, costForTwoMessage, avgRating, feeDetails, cloudinaryImageId, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;
  const groupedMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.
    filter(x => x.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || x.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

  return (
    <>
      <div className="container mx-auto">
        <div className="flex p-4 bg-white shadow-md rounded-lg mt-8">
          <div className="flex-shrink">
            <img
              className="w-[20rem] h-[20rem] object-cover rounded-lg"
              src={IMG_CDN_URL + cloudinaryImageId}
              alt={name}
            />
          </div>
          <div className="ml-4 flex-shrink flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold">{name}</h2>
              <p className="text-xl text-gray-500">{city}, {locality}, {areaName}</p>
            </div>
            <div>
              <p className=" text-gray-800 font-semibold">{costForTwoMessage}</p>
              <p className=" text-gray-800 font-semibold">Rating: {avgRating} ({totalRatingsString})</p>
              <p className=" text-gray-800 font-semibold">
                ₹{feeDetails?.amount ? feeDetails?.amount / 100 : feeDetails?.defaultAmount / 100} Delivery fees will apply
              </p>
            </div>
          </div>
        </div>

        <hr className="my-10" />

        <div className="max-w-[900px] mx-auto">
          <h1 className="text-2xl	mb-10 font-medium">
            Menu
          </h1>
          {
            groupedMenu && groupedMenu.map((menu, index) => <RestaurantMenu menuList={menu?.card?.card} expand={selectedMenuIndex === index} 
            toggleMenu={()=>updateMenuIndex(index)} />)
          }
        </div>

      </div>
    </>
  )
}

export default Restaurant