
import Image from 'next/image'
import React from 'react'
import Button from '../lib/Button'

const Hero = () => {
  return (
    <section id='hero' className=' min-h-screen py-[7.5rem] bg-dark'>
      <div className=" flex max-lg:flex-col items-center justify-center gap-12">
        
        <div id="hero-heading-wrapper" className='flex flex-col lg:items-start items-center justify-center mx-2 lg:w-1/2'>
          <h1 className='text-5xl max-lg:text-center lg:text-6xl leading-tight text-primary font-bold'>
            REVIVE YOUR COFFEE LOVE
          </h1>
          <p className=' text-primary max-lg:text-center lg:pr-20'>
            Coffee contains caffeine, a natural stimulant that can help increase alertness and reduce fatigue. It also contains antioxidants and other beneficial compounds.
          </p>

         <Button text='VIEW MORE DETAILS' className='
            p-10 py-4 mt-6 w-fit
          bg-primary hover:bg-dark text-dark hover:text-primary
            border  hover:border-primary
            rounded-md
         ' />
        </div>

        <div id="hero-image-wrapper" className='relative lg:w-1/3 max-sm:m-2'>
          <Image className='max-lg:w-[400px]' src='/images/coffee-pack-1.webp' alt='hero-image' width={900} height={600} />
          <Image className='absolute bottom-20 max-lg:w-[150px]' src='/images/original-stamp.webp' alt='original-stamp' width={200} height={200} />

        </div>
        
      </div>
    </section>
  )
}

export default Hero
