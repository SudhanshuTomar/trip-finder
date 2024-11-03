import React from 'react'
import { useState } from 'react'
import { logo_url } from '../utils/constants';

function MenuList({ item }) {
    const card = item?.card?.card;
    const items = card?.carousel || card?.itemCards; // Store either carousel or itemCards
    const [menu, setMenu] = useState("open"); // State to toggle menu open or closed

    return items ? (
        <div className='m-4 p-4' key={card?.title}>
            <div className='cursor-pointer flex justify-between items-center border border-slate-500 rounded-md bg-slate-200'>
                <h1 className='text-2xl font-bold'>{card?.title}</h1>
                <p onClick={()=>{
                    setMenu(menu === "open" ? "closed" : "open")
                }}>⬇️</p>
            </div>
            {menu === "open" && (
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
            )}
        </div>
    ) : null; // Return null if neither carousel nor itemCards are present
}

export default MenuList