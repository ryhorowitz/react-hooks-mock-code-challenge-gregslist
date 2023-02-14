import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then(r => r.json())
      .then(data => setListings(data))
      .catch(err => console.error('ERROR', err))
  }, [])

  console.log('search', search)
  let displayListings = listings.filter(listing => {
    return listing.description.includes(search)
  })
  console.log(displayListings)


  function handleDeleteListing(id) {
    const updatedListings = listings.filter(listing => listing.id !== id)

    const optionsObj = {
      method: 'DELETE',
      'Content-Type': 'application/json',
    }

    fetch(`http://localhost:6001/listings/${id}`, optionsObj)
      .then(r => r.json())
      .then(data => setListings(updatedListings))
      .catch(err => console.error('ERROR', err))
  }
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={ displayListings }
        onDelete={handleDeleteListing} />
    </div>
  );
}

export default App;
