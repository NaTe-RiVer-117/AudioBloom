import React from "react";

const Navbar = ({ data, toggleFavorites, showFavorites }) => {
  const favCount = data.filter((item) => item.added).length;
  const totalCount = data.length;

  return (
    <div className="bg-black w-full px-6 py-4 flex items-center justify-between shadow-md">
      <h3 className="font-bold text-2xl bg-gradient-to-r from-green-500 via-lime-300 to-lime-200 text-transparent bg-clip-text">
        AudioBloom
      </h3>

      <div
        role="button"
        tabIndex={0}
        onClick={toggleFavorites}
        onKeyDown={(e) => e.key === "Enter" && toggleFavorites()}
        className="flex items-center p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="lime"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="lime"
          className="w-5 h-5 mr-2"
         >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <h3 className="text-white text-sm font-semibold">
          {showFavorites ? "Show All" : "Favorites"}
        </h3>
        <div className="ml-2 w-5 h-5 rounded-full bg-black text-lime-100 flex items-center justify-center text-xs font-bold">
        {showFavorites ? totalCount : favCount}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
