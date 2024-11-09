import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../utils/UserContext'
import { logo_url } from '../utils/constants'
const Cart = () => {
  const cartState = useContext(CartContext);
  console.log("cartState:", cartState);
  return (
    <div className='m-auto flex flex-col w-6/12 border justify-between my-4'>
        {cartState.map((subItem) => (
            <div className='flex justify-between m-2 p-2 border' key={subItem?.dish?.info?.id || subItem?.card?.info?.id}>
                <p>
                    {subItem?.dish?.info?.name || subItem?.card?.info?.name} - {"₹" + ((subItem?.dish?.info?.defaultPrice || subItem?.card?.info?.defaultPrice) / 100 || (subItem?.dish?.info?.price || subItem?.card?.info?.price) / 100)}
                </p>
                <div>
                    <img className='size-20 z-0' src = {logo_url + (subItem?.dish?.info?.imageId || subItem?.card?.info?.imageId)} alt="food"/> 
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default Cart