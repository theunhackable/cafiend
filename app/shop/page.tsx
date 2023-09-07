import React from 'react'
import Testimonials from '../components/Testimonials'
import ProductLine from '../lib/ProductLine'

const page = () => {
  return (
    <main id='about-main' className='bg-primary'>
    <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold text-primary'>SHOP</h1>
    </header>
    
    <section className='mx-auto px-4 flex flex-col justify-center items-center'>
      <h1 className='max-sm:text-center font-extrabold text-5xl my-16'>
        OUR BLENDS DELIVER
      </h1>
      <ProductLine />
    </section>
    <Testimonials />
  </main>
  )
}

export default page
