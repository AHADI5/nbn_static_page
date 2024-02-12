import React from "react";

export default function Card(props ) {
    let textBadge ; 
    if (props.openSpot === 0) {
        textBadge = "SOLD OUT"
    } else if(props.location === "online") {
        textBadge = "ONLINE"
    }
    return (
     
            <div className="card">
                <div className="illustrations-part">
                    <img src={`../images/${props.image}`} alt="IMG" />
                    {textBadge  && <div className="openSpots">{textBadge}</div>}
                    
                </div>
                <div className="informations">
                    <div className="star-rate">
                        <img src="/images/Star.png" alt="Star" /> 
                        <span>{props.starRate}</span> 
                        <span>{props.rateNumber} . </span>
                        <span>{props.country}</span>
                       
                    </div>
                    <div className="about">{props.about}</div>
                    <div className="price">From {props.price} / person </div>
                </div>
            </div>
      
    )
}