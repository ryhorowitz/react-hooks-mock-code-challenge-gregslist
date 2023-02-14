import React, { useState } from "react";

function ListingCard( { id, description, image, location, onDelete }) {
  const [liked, setLiked] = useState(false)

  function handleLikeClick() {
    setLiked(!liked)
  }
  function handleTrachCanClick() {
    onDelete(id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active"
            onClick={handleLikeClick}>★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={handleLikeClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"
        onClick={handleTrachCanClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
