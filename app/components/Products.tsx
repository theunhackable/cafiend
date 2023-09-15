import React from 'react'
import ProductLine from '../lib/ProductLine'
import Link from 'next/link'

const Products = () => {
  return (
    <section className='flex flex-col items-center py-32 bg-primary'>
      <h1 className='mx-2 text-6xl max-lg:text-center leading-tight text-dark font-bold'>
        OUR BLENDS DELIVER
      </h1>
      <p className='max-md:text-center m-2'>
        {`Hot, Cold, Sweet or straight up, we've got the brew for you.`}
      </p>

      <Link href='/shop' className='
        p-10 py-3 my-12 w-fit font-inconsolata
        bg-primary hover:bg-dark text-dark hover:text-primary
         border border-black 
         rounded-md
      '>
        ALL PRODUCTS
      </Link>
      <ProductLine />

    </section>
  )
}

export default Products
