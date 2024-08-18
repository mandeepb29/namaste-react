import { useState } from "react";
import Dish from "./Dish";

const RestaurantMenu = ({ menuList, expand, toggleMenu }) => {

    console.log(menuList);
    if (menuList == null) return "This menu is empty."


    return (<div className="border-bottom mb-8 bg-white shadow-lg rounded-md">

        <div className="flex justify-between items-center py-4 px-8 mb-4 bg-white" onClick={toggleMenu}>
            <h4 className="font-bold text-xl">
                {menuList?.title}
            </h4>
            <span className="text-2xl">{expand ? "⬆️" : "⬇️"}</span>
        </div>

        <div className={!expand ? "hidden" : ""}>
            {
                !menuList.itemCards || menuList.itemCards.length == 0 ?
                    <div className="border border-gray-100 h-24 flex items-center justify-center w-full rounded-md">
                        No dishes in this category available.
                    </div> : 
                    menuList.itemCards?.map(x => <Dish dish={x?.card?.info} />
                    )
            }
        </div>

    </div>)
}

export default RestaurantMenu