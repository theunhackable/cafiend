import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { products } from '../data/data'





const Product = ({name, price, image_url}: Product) => {
  return (
    <div className='flex flex-col text-center items-center border-2 hover:border-dark py-16 max-lg:px-12 mx-2 md:px-32 w-fit'>
      
      <h2 className='text-3xl font-extrabold'>
        {name}
      </h2>
      
      <p className='mb-2'>
        $ {price} USD
      </p>

      <Image src={`/images/${image_url}`} alt={image_url} width={222} height={400}/>
      
      <Button text='ADD TO CART' className='
        p-10 py-3 mt-6 w-fit
       bg-primary hover:bg-dark text-dark hover:text-primary
        border border-black 
        rounded-md
      ' />
    </div>
  )
}



const ProductLine = () => {
  
  return (
    <div className='flex flex-wrap items-center gap-10 justify-center'>
      {products.map((product, index) => (<Product key={index} {...product} />))}
    </div>
  )
}

export default ProductLine
