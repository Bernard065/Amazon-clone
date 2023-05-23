import React, { useState } from 'react'
import {logo} from '../../assets'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { allItems } from '../../constants';
import SubHeader from './SubHeader';

const Header = () => {
    const [showAll, setShowAll] = useState(false)
    console.log(showAll)
  return (
    <div>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
            <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer'>
                <img className='w-24 mt-2' src={logo} alt='logo' />
            </div>
            <div className='flex items-center border border-transparent hover:border-white px-2 h-[80%]'>
                <LocationOnIcon />
                <p className='flex flex-col text-sm text-lightText font-light'>Deliver to <span className='font-semibold text-sm text-whiteText'>Kenya</span></p>
            </div>
            <div className='flex flex-grow h-10 rounded-md relative'>
            <span onClick={()=> setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer flex items-center justify-center rounded-tl-md rounded-bl-md text-sm text-amazon_blue font-titleFont'>All<span><ArrowDropDownIcon /></span>
            {showAll && (
                <div>
                    <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                        {allItems.map(item => (
                            <li key={item.id} className='text-sm tracking-wide font-titleFont border-[1px] border-transparent hover:border-amazon_blue hover:bg-[#e93535e1] hover:text-white cursor-pointer duration-200'>{item.title}</li>
                        ))}  
                    </ul>
                </div>
            )}
            </span> 
            <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none' type='text' />
            <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] cursor-pointer text-amazon_blue rounded-tr-md rounded-br-md'><SearchIcon /></span>
            </div>
            <div className='flex flex-col items-center justify-center border border-transparent hover:border-white px-2 h-[80%]'>
                <p className='text-xs font-light text-lightText '>Hello, sign in</p>
                <p className='text-sm font-semibold text-whiteText mt-1'>Accounts & List<span><ArrowDropDownIcon /></span></p>
            </div>
            <div className='flex flex-col items-center justify-center border border-transparent hover:border-white px-2 h-[80%]'>
                <p className='text-xs font-light text-lightText'>Returns</p>
                <p className='text-sm font-semibold text-whiteText mt-1'>& Orders</p>
            </div>
            <div className='flex flex-col items-center justify-center border border-transparent hover:border-white px-2 h-[80%] relative'>
                <ShoppingCartIcon />
                <p className='text-sm font-semibold text-whiteText mt-1'>Cart<span className='absolute text-xs -top-2 left-6 bg-[#f3a847] p-1 font-semibold h-4 text-amazon_blue rounded-full flex items-center justify-center'>0</span></p>
            </div>
        </div>
        <SubHeader />
    </div>
  )
}

export default Header