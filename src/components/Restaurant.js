import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { RES_URL } from '../utils/constants';
import { logo_url } from '../utils/constants';
import MenuList from './MenuList';
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
    const {id, name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId} = restaurant?.data?.cards[2]?.card?.card?.info;
    const menuList = restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        
    <div key={id} className='flex items-center flex-col m-4'>
        <img className='size-40' src={logo_url + cloudinaryImageId} alt="restaurant"/>
        <h1 >{name}-<p>{avgRating}</p></h1>
        <p>{cuisines.join(',')}</p>
        <p>{costForTwoMessage}</p>
        <h2>Menu</h2>
        <div>
            {menuList.map((item) => <MenuList item={item}/>)}
        </div>
    </div>
  );
}

export default Restaurant