import React from 'react'
import { useLoaderData } from 'react-router'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Products = () => {
  const data = useLoaderData();
  const productData = data
  // console.log(productData)
  return (
    <div className='max-w-screen-2xl max-auto grid grid-cols-4 gap-10 px-4'>
      {productData.map((product) => (
        <div key={product.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-50 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
          <div className='w-full h-auto flex items-center justify-center relative'>
            <img className='w-52 h-64 object-contain' src={product.image} alt={product.title} />
          </div>
          <div className='px-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue'>{product.title.substring(0, 18)}</h2>
              <p className='text-sm text-gray-600 font-semibold'>${product.price}</p>
            </div>
          </div>
          <div>
            <p className='text-sm'>{product.description.substring(0, 98)}...</p>
          </div>
          <div className='flex mb-1 text-yellow-500'>
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
          <div>
            <button className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to bg-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products