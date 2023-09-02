import React from 'react'
import Testimonials from '../components/Testimonials'
import Image from 'next/image'

const About = () => {
  return (
    <main id='about-main' className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>ABOUT US</h1>
      </header>
      
      <section className='container mx-auto px-4'>
        <div className='flex items-center justify-center'>
          <div className='w-1/2'>
            <h2 className='py-24 text-5xl font-extrabold leading-tight text-dark'>
              THE PERFECT PAIRING: COFFEE AND DESSERTS COMPLEMENT EACH OTHER
            </h2>
          </div>
          <div className='w-1/2 py-24 px-12 border-l-2 border-black'>
            <p className='my-2'>
              Coffee is a popular and beloved beverage that is made from roasted coffee beans, which come from the berries of the Coffee a plant. The drink is enjoyed by millions of people.
            </p>
            <p className='my-4'>
              Coffee is often enjoyed as a morning or afternoon pick-me-up, but it can also be savored as a relaxing and enjoyable beverage. In addition to its taste and aroma, coffee has been shown to have a variety of health benefits, including increased alertness and improved mental focus. It is also a source of antioxidants and other beneficial compounds.
            </p>
            <div id="images" className='w-full flex items-center justify-end static'>
              <Image className='absolute right-[340px]' src="/images/signatures.webp" alt="signature" width={200} height={20}/>

              <Image src="/images/original-stamp-black.webp" alt="original" width={150} height={100} />
            </div>
          </div>
        </div>
      </section>   
      <section className='bg-dark text-primary flex flex-col items-center justify-center'>
      <div className='container flex flex-wrap p-12 justify-center items-center gap-10'>
          
          <div>
            <Image className='rounded-md' src="/images/about-1.webp" alt="original" width={455} height={100} />
            <Image className='rounded-md my-10' src="/images/about-2.webp" alt="original" width={455} height={100} />
          </div>
          
          <div className=' w-[455px]'>
            <h2 className='text-5xl font-extrabold leading-tight'>
              THE JOURNEY OF COFFEE FARM
            </h2>
            
            <p>
              Coffee is a brewed drink made from roasted coffee beans, which are the seeds of berries from the Coffee a plant.
            </p>
            <Image className='rounded-md my-10' src="/images/about-3.webp" alt="original" width={455} height={100} />
          </div>

        </div>
          
      </section> 
      <section className='bg-primary text-dark flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-extrabold'>
          OUR TIMELINE
        </h1>

      </section>
      <Testimonials />
    </main>
  )
}

export default About
