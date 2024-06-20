import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/context';

function Navbar() {
    //ab hum context ki cheezo ko use kar skte hai
    const {searchParams , setSearchParams ,handleSubmit} = useContext(GlobalContext)

    console.log(searchParams);


  return (
    <div className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 '>
      <h2 className='text-2xl font-semibold'>fooDRecipe</h2>
      <form>
        <input type="text" name="search" placeholder="Enter Item..." value={searchParams} onChange={(e) => setSearchParams(e.target.value)} className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200' />
        <button onClick={handleSubmit} className='w-[120px] ml-[21px] px-[12px] py-[3px] rounded bg-gray-800 text-white text-[15px]'>Search</button>
      </form>
      <ul className='flex gap-5'>
        <li>
            <NavLink to={'/'} className="text-black hover:text-gray-700 duration-300">Home</NavLink>
        </li>
        <li>
            <NavLink to={'/favorites'} className="text-black hover:text-gray-700 duration-300">Favorites</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
