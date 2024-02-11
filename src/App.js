import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import "./App.css";
export default function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card/>
    </div>
  )
}