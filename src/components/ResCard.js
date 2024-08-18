import React from 'react';

const ResCard = ({ restaurant }) => {
  //console.log(restaurant.info);
  const {name,cloudinaryImageId:image, areaName:location, costForTwo:price, avgRating:rating} = restaurant.info;
  const cuisine = restaurant.info.cuisines.join(", ");

  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-full">

      <img className="w-full h-48 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${image}`} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Rating:</span> {rating} ★
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Price:</span> {price} 
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Cuisine:</span> {cuisine}
        </p>
      </div>
    </div>
  );
};

export const withPromotedTag = (WrappedComponent) => {
  return (props) => {

    return (
    <div className="relative w-full flex">
    <span className="absolute bg-black inline-flex text-white py-2 px-4 rounded-lg">Open</span>
    <WrappedComponent {...props} />
    </div>
    )
  }
}


export default ResCard;
