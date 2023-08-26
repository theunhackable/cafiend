import Image from 'next/image'
import React from 'react'


type Props = {
  image_url: string
}


const images = [
  'insta-1.webp',
  'insta-2.webp',
  'insta-3.webp',
  'insta-4.webp',
  'insta-5.webp',
  'insta-6.webp',

]

const InstaImage = ({image_url}: Props) => {
  return (
    <Image src={`/images/${image_url}`} alt={`${image_url}`} height={317} width={317}/>
  )
}

const InstaImages = () => {
  return (
    <div id="insta-images" className='my-16 flex flex-wrap justify-center items-center overflow-hidden'>
      {images.map((image, ind) => ( <InstaImage key={ind} image_url={image} /> ))}
    </div>
  )
}


const Footer = () => {
  return (
    <footer className='bg-dark text-primary'>
      <div id="instaimages">
        <div className='flex justify-center items-center'>
          <InstaImages />
        </div>
      </div>
      <div className='flex mx-48 my-12 justify-between items-start'>
        <div id="address">
          <h3 className='text-left font-extrabold text-2xl'>
          CONTACT US
          </h3>
          <ul>
            <li className='my-3'>
              <p>
                webflow,shop no.24 Fifth,USA
              </p>
            </li>
            <li className='my-3'>
              <p>
                peacefulqode@gmail.com
              </p>
            </li>
            <li className='my-3'>
              <p>
                +1800-001-658
              </p>
            </li>
          </ul>
        </div>
        <div id="heading" className='flex flex-col items-center'>
          <Image src='/images/cafiend-logo-dark.svg' alt='logo' width={200} height={200} />
          <p className='my-6'>
            Hot, Cold, Sweet or straight up, we&apos;ve got the brew for you.
          </p>
        </div>
        <div id="timings" className='text-right'>

          <h3 className='text-right font-extrabold text-2xl'> 
            OPEN HOUR
          </h3>
          <ul>
            <li className='my-3'>
              <p>
                Monday-Friday: 09:00-20:00
              </p> 
            </li>
            <li className='my-3'>
              <p>
                Saturday:  09:00-18:00
              </p>
            </li>
            <li className='my-3'>
              <p>
                Sunday: 09:00-18:00
              </p>
            </li>
          </ul>

        </div>
      </div>
      <div className='h-0.5 w-full bg-white/20' />
        
      <p className='py-6 text-center'>
      © Powered by Webflow created by PeacefulQode.
      </p>
    </footer>
  )
}

export default Footer
