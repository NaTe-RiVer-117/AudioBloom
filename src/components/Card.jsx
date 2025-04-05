import React from "react";

const Card = ({ data, handleAddToFav }) => {
  const { id, name, artist, image, added } = data;

  return (
    <div className="relative bg-gradient-to-br from-black via-slate-800 to-black border-1 border-slate-800 w-60 p-4 rounded-md shadow-lg flex flex-col items-center gap-4">
      {/* Album Image */}
      <div className="w-32 h-32 bg-lime-500 border-2 border-gray-100 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>

      {/* Song Details */}
      <div className="text-center">
        <h3 className="text-white font-bold text-lg line-clamp-2">{name}</h3>
        <h6 className="text-gray-400 text-sm font-semibold line-clamp-2">{artist}</h6>
      </div>

      {/* Add to Favorites Button */}
      <button
        onClick={() => handleAddToFav(id)}
        className={`px-3 py-1 text-white font-bold rounded-full text-md transition-all duration-300
          ${added ? "bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800" : "bg-gradient-to-r from-lime-800 via-lime-600 to-green-800"}
        `}
      >
        {added ? "ADDED" : "ADD TO FAV"}
      </button>
    </div>
  );
};

export default Card;
