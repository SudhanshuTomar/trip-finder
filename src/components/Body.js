import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "../index.css";
import {API_URL, logo_url} from "../utils/constants";
import Card from "./Card";
import { Link } from "react-router-dom";

function Body() {
    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredRes, setFilteredRes] = useState([]);
    useEffect(() => {fetchData();}, []);
    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredRes(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    if (restaurants.length === 0) {
        console.log(restaurants);
    }
    return (
        <div className="my-4 mx-2">
        {/* 
        -search
        -filter
        -restaurants container */}
        <div className="flex items-center">
            <input 
            type="text" 
            placeholder="Search for restaurants" 
            className="border border-gray-400 p-2 rounded-lg mr-2" 
            onChange={(e) => setSearch(e.target.value)}
            />
            <button 
                className="mx-2 bg-emerald-300 shadow-lg rounded-lg px-4 py-2" 
                onClick={() => {
                    const filteredRes = restaurants.filter((restaurant) => 
                        restaurant.info.name.toLowerCase().includes(search.toLowerCase())
                    );
                    setFilteredRes(filteredRes);
                }}
            >
                Search
            </button>
            <button 
                    className="mx-2 bg-teal-300 shadow-lg rounded-lg px-4 py-2"
                    onClick={() => {
                        const filteredRes = restaurants.filter((restaurant) => 
                            restaurant.info.avgRating >= 4
                        );
                        setFilteredRes(filteredRes);
                    }}
                    >Top rated restaurants
            </button>
        </div>
        
        <div className="flex my-4 mx-2 flex-wrap">
            {filteredRes.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
                    <Card
                    name={restaurant.info.name}
                    rating={restaurant.info.avgRating}
                    image={logo_url + restaurant.info.cloudinaryImageId}
                    cuisine={restaurant.info.cuisines.join(", ")}
                />
                </Link>
            ))}
        </div>

    </div>
    );
    }
export default Body;   