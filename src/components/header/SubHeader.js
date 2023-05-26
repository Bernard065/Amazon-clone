import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import SidebarHeader from './SidebarHeader';
import {motion} from 'framer-motion'


const SubHeader = () => {
    const [sidebar, setSidebar] = useState(false)
    const ref = useRef()

    useEffect (() => {
        document.body.addEventListener("click", (e) => {
            if(e.target.contains(ref.current)) {
                setSidebar(false)
            }
        })
    }, [ref, sidebar])

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
                <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className='w-[350px] h-full bg-white border border-black'>
                    <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                        <AccountCircleIcon />
                        <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, sign in </h3>
                    </div>
                    <div className='overflow-y-auto max-h-[calc(100vh-64px)]'>
                        <SidebarHeader 
                            title= "Digital Content & Devices"
                            category1 = "Amazon Music"
                            category2 = "Kindle E-readers & Books"
                            category3 = "Amazon Appstore"
                        />
                         <SidebarHeader 
                            title= "Shop By Department"
                            category1 = "Electronics"
                            category2 = "Computers"
                            category3 = "Smart Home"
                            category4 = "Arts & Crafts"
                            category5 = "Automotive"
                            category6 = "Baby"
                            category7 = "Beauty and personal care"
                        />
                         <SidebarHeader 
                            title= "Programs & Features"
                            category1 = "Gift Cards"
                            category2 = "Shop By Interest"
                            category3 = "Amazon Live"
                        />
                         <SidebarHeader 
                            title= "Help & Settings"
                            category1 = "Your Account"
                            category2 = "Customer Service"
                            category3 = "Sign In"
                        />
                        <span onClick={() => setSidebar(false)} className='absolute top-0 left-[360px] cursor-pointer w-18 h-18 text-black flex items-center justify-center bg-gray-200 hover:bg-red-500 hover:text-white duration-300'>
                            <CloseIcon />
                        </span>
                    
                    </div>
                    
                </motion.div>
                </div> 
            </div>
        )}
    </div>
  )
}

export default SubHeader