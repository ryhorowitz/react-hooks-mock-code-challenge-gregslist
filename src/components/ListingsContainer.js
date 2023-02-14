import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  const listingCards = listings.map(listing => {
    const { id, description, image, location } = listing
    return <ListingCard key={id}
      id={id}
      description={description}
      image={image}
      location={location}
      onDelete={onDelete} />
  })
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
