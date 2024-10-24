import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { RES_URL } from '../utils/constants';
const Restaurant = () => {
    const {resid} = useParams();
    //fetch data for this particular resid
    const [restaurant, setRestaurant] = useState("");
    const fetchRestaurant = async () => {
        const data = await fetch(RES_URL + resid);
        const json = await data.json();
        setRestaurant(json);
    }

    useEffect( () =>{
        fetchRestaurant();
    },[]);
    
    if(restaurant === ""){
        return <div>Loading...</div>
    }
    const {id, name, cuisines, costForTwoMessage, avgRating} = restaurant?.data?.cards[2]?.card?.card?.info;
    const menuList = restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return (
        
    <div key={id}>
        <h1>{name}-<p>{avgRating}</p></h1>
        <p>{cuisines.join(',')}</p>
        <p>{costForTwoMessage}</p>
        <h2>Menu</h2>
        <div>
            {menuList.map((item) => {
                return(
                    <div key = {item?.card?.info?.id}>
                        <h3>{item?.card?.info?.name}-{item?.card?.info?.defaultPrice /100 || item?.card?.info?.price /100}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Restaurant