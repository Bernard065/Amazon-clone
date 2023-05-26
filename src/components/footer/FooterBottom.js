import React from 'react'
import { footerItems } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
        <div className='max-w-5xl mx-auto'>
            <div className='w-full grid grid-cols-7 gap-3 place-content-center text-gray-400'>
                {footerItems.map((item) => (
                    <div className='group' key={item.id}>
                        <h3 className='footerBottomTitle'>{item.title}</h3>
                        <p className='footerBottomText'>{item.des}</p>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center gap-4 text-[#DDD] font-semibold text-[13px] mt-12'>
                <p className='hover:underline cursor-pointer'>Conditions of Use</p>
                <p className='hover:underline cursor-pointer'>Privacy Notice</p>
                <p className='hover:underline cursor-pointer'>Your Ads Privacy Choices</p>
            </div>
            <div className='flex items-center justify-center gap-4 text-[#DDD] font-semibold text-[13px]'>
                <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom