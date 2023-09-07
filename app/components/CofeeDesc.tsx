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
      <div id="container" className='mb-20 lg:px-72'>
        <h1 className='text-6xl leading-tight font-bold text-center'>
          CAFFEINE INFUSED DELIGHT
        </h1>
        <p className='text-center m-4'>
          Coffee can be enjoyed in a variety of forms, from a simple cup of black coffee to more elaborate drinks like lattes and cappuccinos. It is a popular social beverage and often enjoyed as a part of social gatherings, meetings, or alone as a moment of relaxation.
        </p>
      </div>

      <video  src='/videos/cofee-from-machine.webm'  muted autoPlay loop />
       
      <div id='desc-wrapper' className='m-10 lg:m-40 mb-0 flex flex-col items-center justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col'>
          <div id='desc-left' className='gap-5 lg:w-1/2 h-fit sticky max-lg:static top-24'>
            <h1 className='text-5xl leading-tight font-bold text-left'>
            WHAT MAKES OUR COFFEE BEST?
            </h1>
            <p className=''>
            Coffee can be served hot or cold and can be prepared in a variety of ways, such as drip brewing, French press, espresso, and more. The flavor and strength of the coffee depend on the type of beans used, the roasting process, and the brewing method.
            </p>
          </div>
          
          <div id='desc-right' className='flex flex-col gap-5 lg:w-1/2 lg:pl-32'>

            {headlines.map((headline, index) =>  <HeadLine key={index} {...headline} /> )}
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default CofeeDesc
