import React from 'react'
import {logo} from '../../assets'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer'>
            <img className='w-24 mt-2' src={logo} alt='logo' />
        </div>
        <div className='flex items-center border border-transparent hover:border-white px-2 h-[80%]'>
            <LocationOnIcon />
            <p className='flex flex-col text-sm text-lightText font-light'>Deliver to <span className='font-semibold text-sm text-whiteText'>Kenya</span></p>
        </div>
        <div className='flex flex-grow h-10 rounded-md relative'>
           <span className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer flex items-center justify-center rounded-tl-md rounded-bl-md text-sm text-amazon_blue font-titleFont'>All<span><ArrowDropDownIcon /></span></span> 
           <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none' type='text' />
           <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] cursor-pointer text-amazon_blue rounded-tr-md rounded-br-md'><SearchIcon /></span>
        </div>
    </div>
  )
}

export default Header