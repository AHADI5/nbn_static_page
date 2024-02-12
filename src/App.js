import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Data from "./Components/Data";
import "./App.css";
export default function App() {
  const cardData  = Data.map((data) => {
    return <Card
    key={data.key}
    image = {data.image}
    starRate = {data.starRate}
    rateNumber = {data.rateNumber}
    country={data.country}
    about={data.about}
    price={data.price}
    openSpot = {data.openSpot}

    />

  }) 
  return (
    <div>
        <Navbar/>
        <Hero/>
     
         <div className="cards" >
          {cardData}
         </div>
        </div>
        

  )
}