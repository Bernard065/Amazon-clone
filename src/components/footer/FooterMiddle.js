import React from 'react'
import { logo } from '../../assets'
import { bdFlag } from '../../assets'

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
        <div className='w-full border-b-[1px] border-gray-500 py-10'>
            <div className='max-w-5xl mx-auto text-gray-300'>
                <div className='w-full grid grid-cols-4 items-start'>
                    <div>
                        <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Get to Know Us</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Careers</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Blog</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>About Amazon</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Investor Relations</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Amazon Devices</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Amazon Science</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Make Money with Us</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Sell products on Amazon</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Sell on Amazon Business</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Sell apps on Amazon</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Become an Affiliate</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Advertise Your Products</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Self-Publish with Us</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Host an Amazon Hub</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Amazon Payment Products</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Amazon Business Card</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Amazon Business Card</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Reload Your Balance</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Amazon Currency Converter</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Let Us Help You</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Amazon and COVID-19</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Your Account</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Your Orders</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Shipping Rates & Policies</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Returns & Replacements</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Manage Your Content and Devices</li>
                            <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex gap-6 items-center justify-center py-6'>
            <div>
                <img className='w-20 pt-3' src={logo} alt='logo' />
            </div>
            <div>
                <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
            </div>
            <div className='flex gap-1 border border-gray-500 px-2 py-1 items-center justify-center hover:border-amazon_yellow cursor-pointer duration-200 '>
                <img className='w-6' src={bdFlag} alt='bdFlag' />
                <p>United States</p>
            </div>
        </div>
    </div>
  )
}

export default FooterMiddle