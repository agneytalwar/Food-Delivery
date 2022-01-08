import React from "react";

//icon
import { IoMdArrowDropright } from "react-icons/io";

function PictureCarouselCard() {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735044.png"
            alt="trending places"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8 bottom-2 text-white">
          <h4 className="z-10">Trending This Week</h4>
          <h6 className="z-10 flex items-center">
            30 places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
}

export default PictureCarouselCard;
