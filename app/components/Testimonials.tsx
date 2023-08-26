import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';




const testimonials = [
  {
    name: 'ANN DEN SMITH',
    position: 'MANAGER',
    quote: "I'm a very stubborn person. I think it has helped me over my career. I'm sure it has hindered me at times as well, but not too many times. I know that if I set my mind to do something,I will achieve it."
  },
  {
    name: 'RENIE JOHN',
    position: 'OWNER',
    quote: "I'm a very stubborn person. I think it has helped me over my career. I'm sure it has hindered me at times as well, but not too many times. I know that if I set my mind to do something,I will achieve it."
  
  }

]

type Props = {
  name: string
  position: string
  quote: string
}

const TestimonialCard = ({ name, position, quote }: Props) => {

  return (
    <div className='flex flex-col items-center justify-center w-1/2'>
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
const Testimonials = () => {
  return (
    <section id='testimonial-section' className='py-32 flex flex-col items-center justify-center bg-primary'>

      <h1 className='text-5xl leading-tight text-dark font-bold'>
        OUR TESTMONIAL
      </h1>
      {testimonials.map((testimonial, ind) => ( <TestimonialCard key={ind} {...testimonial} /> ))}
      
      
    </section>
  )
}

export default Testimonials
