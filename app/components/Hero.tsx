
import Image from 'next/image'
import React from 'react'
import Button from '../lib/Button'

const Hero = () => {
  return (
    <section id='hero' className=' min-h-screen py-[7.5rem] bg-dark'>
      <div className=" flex max-lg:flex-col items-center justify-between gap-12 sm:mx-[15.75rem]">
        
        <div id="hero-heading-wrapper">
          <h1 className='text-6xl leading-tight text-primary font-bold'>
            REVIVE YOUR COFFEE LOVE
          </h1>
          <p className=' text-primary sm:pr-20'>
            Coffee contains caffeine, a natural stimulant that can help increase alertness and reduce fatigue. It also contains antioxidants and other beneficial compounds.
          </p>

         <Button text='VIEW MORE DETAILS' className='
            p-10 py-4 mt-6 w-fit
          bg-primary hover:bg-dark text-dark hover:text-primary
            border  hover:border-primary
            rounded-md
         ' />
        </div>

        <div id="hero-image-wrapper" className='relative'>
          <Image className='' src='/images/coffee-pack-1.webp' alt='hero-image' width={900} height={600} />
          <Image className='absolute bottom-20' src='/images/original-stamp.webp' alt='original-stamp' width={200} height={200} />

        </div>
        
      </div>
    </section>
  )
}

export default Hero
