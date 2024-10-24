import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import logo from '../utils/logo.jpg';
import {Link } from 'react-router-dom';

function Header() {
    const [login,setlogin] = useState("Login");
  return (
    <header className='flex justify-between items-center bg-slate-300 '>
        <img src={logo} alt="logo" className='w-28 '/>
        <h1>Trip Finder</h1>
        <nav className='flex justify-between items-center'>
            <ul className='flex justify-between'>
            <li className='mx-4'>
                <Link to="/">Home </Link>
            </li>
            <li className='mx-4'>
                <Link to="/about">About</Link>
            </li>
            <li className='mx-4'>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
            <button 
            className='mx-4 px-4 py-2 bg-lime-400 rounded-lg'
            onClick= {()=>{
                login === "Login"? setlogin("Logout"):setlogin("Login");
            }
        }
            >{login}</button>
        </nav>
    </header>
  );
}
export default Header;