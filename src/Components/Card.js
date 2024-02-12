import React from "react";

export default function Card({image , starRate , country , about , price , rateNumber , openSpot} ) {
    return (
     
            <div className="card">
                <div className="illustrations-part">
                    <img src={`../images/${image}`} alt="IMG" />
                    {openSpot === 0 && <div className="openSpots">SOLD OUT</div>}
                    
                </div>
                <div className="informations">
                    <div className="star-rate">
                        <img src="/images/Star.png" alt="Star" /> 
                        <span>{starRate}</span> 
                        <span>{rateNumber} . </span>
                        <span>{country}</span>
                       
                    </div>
                    <div className="about">{about}</div>
                    <div className="price">From {price} / person </div>
                </div>
            </div>
      
    )
}