import React from 'react'
import Button from '../lib/Button'
import ProductLine from '../lib/ProductLine'

const Products = () => {
  return (
    <section className='flex flex-col items-center py-32 bg-primary'>
      <h1 className='text-6xl leading-tight text-dark font-bold'>
        OUR BLENDS DELIVER
      </h1>
      <p>
        {`Hot, Cold, Sweet or straight up, we've got the brew for you.`}
      </p>

      <Button text='ALL PRODUCTS' className='
        p-10 py-3 my-12 w-fit
        bg-primary hover:bg-dark text-dark hover:text-primary
         border border-black 
         rounded-md
      '/>
      <ProductLine />

    </section>
  )
}

export default Products
