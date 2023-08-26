import React from 'react'
import HeadLine from '../lib/Headline'



const headlines = [
  {
    title: 'ORGANIC COFFEE',
    items: ['Pure flavor', 'Natural taste', 'Chemical-free beans', 'Sustainable farming']
  },
  {
    title: 'FRESH ROASTED',
    items: ['Full-bodied flavor', 'Aromatic beans', 'High-quality roast', 'Fresh aroma']
  },
  {
    title: 'ORIGINAL TASTE',
    items: ['Classic flavor', 'Authentic taste', 'Original recipe', 'Traditional blend']

  }
]





const CofeeDesc = () => {
  
  return (
    <section id='coffee-desc' className='flex flex-col items-center py-32  bg-dark text-primary'>
      <div id="container" className='mb-20 px-72'>
        <h1 className='text-6xl leading-tight font-bold text-center'>
          CAFFEINE INFUSED DELIGHT
        </h1>
        <p className='text-center'>
          Coffee can be enjoyed in a variety of forms, from a simple cup of black coffee to more elaborate drinks like lattes and cappuccinos. It is a popular social beverage and often enjoyed as a part of social gatherings, meetings, or alone as a moment of relaxation.
        </p>
      </div>

      <video  src='/videos/cofee-from-machine.webm'  muted autoPlay loop />
       
      <div id='desc-wrapper' className='m-40 mb-0 flex flex-col items-center justify-center gap-5'>
        <div id='desc-container' className='flex '>
          <div id='desc-left' className='flex flex-col gap-5 w-1/2'>
            <h1 className='text-6xl leading-tight font-bold text-left'>
              COFFEE IS A FRUIT
            </h1>
            <p className=''>
              Coffee beans are actually the seeds of a cherry-like fruit that is grown on bushes. Even though coffee is actually a seed, it&apos;s called a bean because of its resemblance to actual beans.
            </p>
          </div>
          
          <div id='desc-right' className='flex flex-col gap-5 w-1/2 px-32'>

            {headlines.map((headline, index) =>  <HeadLine key={index} {...headline} /> )}
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default CofeeDesc
