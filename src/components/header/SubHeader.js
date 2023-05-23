import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SubHeader = () => {
    const [sidebar, setSidebar] = useState(false)

  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
        <ul className='flex items-center gap-2  text-sm tracking-wide'>
            <li onClick={() => setSidebar(true)} className='flex items-center border border-transparent hover:border-white px-2 h-[80%] gap-1'><MenuIcon />All</li>
            <li className='flex items-center border border-transparent hover:border-white px-2 h-[80%]'>Today's Deals</li>
            <li className='flex items-center border border-transparent hover:border-white px-2 h-[80%]'>Customer Service</li>
            <li className='flex items-center border border-transparent hover:border-white px-2 h-[80%]'>Registry</li>
            <li className='flex items-center border border-transparent hover:border-white px-2 h-[80%]'>Gift Cards</li>
            <li className='flex items-center border border-transparent hover:border-white px-2 h-[80%]'>Sell</li>
        </ul>
        {sidebar && (
            <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
               <div className='w-full h-full relative'>
                <div className='w-[350px] h-full bg-white border border-black'>
                    <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                        <AccountCircleIcon />
                        <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, sign in </h3>
                    </div>
                </div>
                </div> 
            </div>
        )}
    </div>
  )
}

export default SubHeader