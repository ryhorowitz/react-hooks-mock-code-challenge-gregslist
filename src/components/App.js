import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings] = useState([])
  // console.log('useEffect')

  useEffect( ()=>{
    fetch(`http://localhost:6001/listings`) 
    .then(r => r.json())
    .then(data => setListings(data))
    .catch( err => console.error('ERROR', err))
  }, [])
  return (
    <div className="app">
      <Header />     
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
