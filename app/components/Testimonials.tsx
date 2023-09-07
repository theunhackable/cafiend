"use client"
import { FaQuoteRight } from 'react-icons/fa';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import Carousel from 'better-react-carousel';
import { testimonials } from '../data/data';

type Props = {
  name: string
  position: string
  quote: string
}

const TestimonialCard = ({ name, position, quote }: Props) => {

  return (

      <div  className='flex flex-col items-center justify-center px-8 md:px-20'>
          <FaQuoteRight className=' mt-24 text-5xl text-dark' />
        <p className=' my-6 text-center text-dark'>&quot; {quote} &quot;</p>
        <h3 className='text-xl font-extrabold'>
          {name}
        </h3>
        <p className='my-3'>
          {position}
        </p>
      </div>
  )

}

const shit = testimonials.map((testimonial, ind) => (  <TestimonialCard key={ind} {...testimonial} />))
      
const Testimonials = () => {
  
  return (
    <section id='testimonial-section' className='py-32 flex flex-col items-center justify-center bg-primary'>

      <h1 className='m-4  max-md:text-center text-5xl leading-tight text-dark font-bold'>
        OUR TESTMONIAL
      </h1>

      <div className='md:w-3/4 '>
        <Carousel
          rows={1}
          cols={1}
          gap={10}
          autoplay={3000}
          
          loop
          containerStyle={{display: 'flex', flexDirection: 'col', justifyContent: 'center', }}

          arrowLeft={
            <AiOutlineLeft
              size={50}
              className='absolute top-1/2 left-[-35px] z-1 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark  text-2xl'
            />
          }

          arrowRight={
            <AiOutlineRight
              size={50}
              className='absolute top-1/2 right-[-35px] -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark  text-2xl '
              
            />
          }

        >
          {testimonials.map((testimonial, ind) => ( <Carousel.Item key={ind}> <TestimonialCard {...testimonial} /> </Carousel.Item> ))}
        </Carousel>
      </div>
      
    </section>
  )
}

export default Testimonials
