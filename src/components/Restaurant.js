import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { RES_URL } from '../utils/constants';
import { logo_url } from '../utils/constants';
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
        
    <div key={id} className='flex items-center flex-col'>
        <img className='size-40' src={logo_url + cloudinaryImageId} alt="restaurant"/>
        <h1 >{name}-<p>{avgRating}</p></h1>
        <p>{cuisines.join(',')}</p>
        <p>{costForTwoMessage}</p>
        <h2>Menu</h2>
        <div>
            {menuList.map((item) => {
                const card = item?.card?.card;
                const items = card?.carousel || card?.itemCards; // Store either carousel or itemCards

                return items ? (
                    <div className='m-4 p-4' key={card?.title}>
                        <h1 className='text-2xl font-bold'>{card?.title}</h1>
                        <div className='flex flex-col '>
                            {items.map((subItem) => (
                                <div className='flex justify-between m-2 p-2' key={subItem?.dish?.info?.id || subItem?.card?.info?.id}>
                                    <p>
                                        {subItem?.dish?.info?.name || subItem?.card?.info?.name} - {"₹" + ((subItem?.dish?.info?.defaultPrice || subItem?.card?.info?.defaultPrice) / 100 || (subItem?.dish?.info?.price || subItem?.card?.info?.price) / 100)}
                                    </p>
                                    <img className='size-20' src = {logo_url + (subItem?.dish?.info?.imageId || subItem?.card?.info?.imageId)} alt="food"/>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null; // Return null if neither carousel nor itemCards are present
            })}
        </div>
    </div>
  );
}

export default Restaurant