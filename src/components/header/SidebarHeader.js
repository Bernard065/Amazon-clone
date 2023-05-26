import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SidebarHeader = ({ title, category1, category2, category3 }) => {
  return (
    <div>
        <div className='py-3 border-b-[1px] border-b-gray-300'>
            <h3 className='text-lg font-semibold font-titleFont mb-1 px-6'>{title}</h3>
            <ul className='text-sm'>
                <li className='flex items-center justify-between b hover:bg-zinc-200 cursor-pointer px-6 py-2'>{category1}
                    <span>
                        <KeyboardArrowRightIcon />
                    </span>
                </li>
                <li className='flex items-center justify-between b hover:bg-zinc-200 cursor-pointer px-6 py-2'>{category2}
                    <span>
                        <KeyboardArrowRightIcon />
                    </span>
                </li>
                <li className='flex items-center justify-between b hover:bg-zinc-200 cursor-pointer px-6 py-2'>{category3}
                    <span>
                        <KeyboardArrowRightIcon />
                    </span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SidebarHeader