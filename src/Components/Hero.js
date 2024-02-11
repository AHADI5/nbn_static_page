import React from "react";
import LandImage from "../images/Vector.png"
export default function Hero() {
    return (
        <div className="hero">
            <img src={LandImage} alt="Vector"/>
            <h1>Online Experiences</h1>
            <div className="hero--text">
            Join unique interactive activities led 
            by one-of-a-kind hosts—all without leaving home.
            </div>

        </div>
    )
}