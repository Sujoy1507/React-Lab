import React from 'react'
import logo from "../assets/tmdb-logo.svg";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='h-full flex justify-between px-16 items-center  bg-pink-600'>
        <img className='w-[200px] p-2 ' src={logo} alt="TMDB Logo" />

        <div className="flex w-1/2 text-xl font-bold text-white justify-evenly">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/allmovie' >All Movies</NavLink>
        </div>
    </div>
  )
}

export default Navbar
