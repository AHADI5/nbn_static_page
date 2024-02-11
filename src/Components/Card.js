import React from "react";
import img1 from "../images/image 12.png"
import img2 from "../images/wedding-photography 1.png"
import img3  from "../images/mountain-bike 1.png"
import star from "../images/Star.png"
export default function Card() {
    return (
       <div className="cards">
            <div className="card">
                <div className="illustrations-part"><img src={img1} alt="Star" /></div>
                <div className="informations">
                    <div className="star-rate">
                        <img src={star} alt="Star" /> 
                        <spa>5.0</spa> 
                        <span>(6) . </span>
                        <span> USA</span>
                       
                    </div>
                    <div className="about">Life lessons with Katie Zaferes</div>
                    <div className="price">From $136 / person </div>
                </div>
            </div>
            <div className="card">
                <div className="illustrations-part"><img src={img2} alt="Star"  /></div>
                <div className="informations">
                    <div className="star-rate">
                    <img src={star} alt="Star"  /> 
                        <spa>5.0</spa> 
                        <span>(6) . </span>
                        <span> USA</span>
                    </div>
                    <div className="about">Life lessons with Katie Zaferes</div>
                    <div className="price">From $136 / person </div>
                </div>
            </div>
            <div className="card">
                <div className="illustrations-part"><img src={img3} alt="Star" /></div>
                <div className="informations">
                    <div className="star-rate">
                        <img src={star} alt="Star" />
                        <spa>5.0</spa> 
                        <span>(6) . </span>
                        <span> USA</span>
                  
                     </div>
                    <div className="about">Life lessons with Katie Zaferes</div>
                    <div className="price">From $136 / person </div>
                </div>
            </div>
       </div>
    )
}