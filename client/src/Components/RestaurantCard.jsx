import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
function RestaurantCard() {
  const [isPro] = useState(false);
  const [isOff] = useState(true);
  return (
    // <Link to={`/restaurant.${}`}>
    <Link to={`/restaurant/2239abc`} className="w-full">
      <div
        className="bg-white p-4 mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3 "
        style={{ maxWidth: "19rem" }}
      >
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full bottom-4 flex items-end justify-between">
            <div className="flex items-start flex-col gap-2">
              {isPro && (
                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                  Pro extra 10% off
                </span>
              )}
              {isOff && (
                <span className="bg-zomato-600 text-white px-2 py-1 rounded text-sm">
                  Rs 100 off
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded mr-3">
              Expires in 30 minutes!
            </span>
          </div>
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/1/4751/6ee8f967d6d59d558276a5c3d61466f4_featured_v2.jpg"
            alt="restaurant"
            className="w-full h-full rounded-2xl object-cover object-center"
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">Chili's Grill and Bar</h4>
            <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
              4.7
              <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <p>Mexican, Italian, American </p>
            <p>₹1,200 for two </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
