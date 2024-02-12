import React from "react";

export default function Card({image , starRate , country , about , price , rateNumber} ) {
    return (
     
            <div className="card">
                <div className="illustrations-part">
                    <img src={`../images/${image}`} alt="IMG" />
                    
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