import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "../index.css";
const Card = ({image,name,cuisine,cost,rating}) => {
    return (
        <div className="flex-col justify-center mx-4 rounded-md my-2 w-52 hover:bg-teal-200 h-[350px]">
            <img src={image} alt="restaurant" className="w-52 h-52" />
            <h2>{name}</h2>
            <p>{cuisine}</p>
            <p>{rating}</p>
            <p>{cost}</p>
        </div>
    );
}

export default Card;