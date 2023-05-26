import React from 'react'
import { useLoaderData } from 'react-router'

const Products = () => {
  const data = useLoaderData();
  const productData = data
  // console.log(productData)
  return (
    <div>
      {productData.map((product) => (
        <div key={product.id}>
          <div>
            <img className='w-52 h-64 object-contain' src={product.image} alt={product.title} />
          </div>
          <div>
            <h2>{product.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products