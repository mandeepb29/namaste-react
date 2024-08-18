import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
const Dish = ({ dish }) => {

  if (dish === null) return "No Data";
  const { id, name, imageId, inStock, category, price,defaultPrice, description, isVeg, isBestseller } = dish;
  return (
    <div className="flex flex-row-reverse items-center border-b p-4 mx-4 gap-2 mb-4 bg-white">
      <img
        src={IMG_CDN_URL+imageId} // Replace with the actual image URL format

        alt={name}
        className="w-28 h-28 rounded-md object-cover border-1 border-gray-600"
      />

      <div className="ml-4 flex-1">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">{name}</h2>
          {isVeg?
            <span className="ml-2 text-xs text-white bg-green-500 py-1 px-2 rounded-full" title="Vegetarian">
              Veg
            </span>
          :<span className="ml-2 text-xs text-white bg-red-500 py-1 px-2 rounded-full" title="Non Vegetarian">
              Non Veg
            </span> }
          {isBestseller && (
            <span className="ml-2 text-xs text-white bg-yellow-500 py-1 px-2 rounded-full" title="Bestseller">
              Bestseller
            </span>
          )}
        </div>
        <p className="text-gray-500">Category: {category}</p>
        <p className="text-gray-500 font-bold">₹{price ? price / 100:defaultPrice/100}</p>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        {inStock ? (
          <>
            <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded">
              ADD
            </button>
            <p className="text-sm text-gray-400 mt-1">Customisable</p>
          </>
        ) : (
          <p className="mt-2 text-red-500">Out of Stock</p>
        )}
      </div>


    </div>
  );
};

export default Dish;
