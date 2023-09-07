import React from 'react'
import { posts } from '@/app/data/data'
import Link from 'next/link'
import Image from 'next/image'
type Props = {
          params: {
            blogId: string
          }
}

const Blog = ({params:{ blogId }}: Props) => {

  let ind = (parseInt(blogId) >= 0 && parseInt(blogId) < posts.length)  ? parseInt(blogId) : -1
  if(ind === -1){
    const Content = (
      <h1 className=' bg-primary flex flex-col font-extrabold text-6xl h-[40vh] text-red-500 text-center justify-center'>
        Blog not found
      </h1>
    )
  return Content;
  }
  else {
    const { date, large_image_url } = posts[ind]
    const Content = (
      <section id='blog-content' className='p-4 flex flex-col items-center justify-center bg-primary text-dark'>
      <div className="container max-w-4xl">
        <h1 className='text-5xl font-extrabold text-dark leading-tight'>
          BOLD AND SMOOTH: COFFEE DELIGHT.
        </h1>

        <figure>
          <figcaption className='font-inconsolata my-2'>
            Coffee is a popular beverage enjoyed by millions of people around the world.
          </figcaption>
        
          <Image  src={`/images/${large_image_url}`} alt='blog-img' width={1000} height={600} />
        </figure>
        <p className='my-2'>
          {date}
        </p>
        <h3 className='text-2xl font-extrabold'>
          Types of coffee
        </h3>
        <p className='my-2'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
        </p>
        <ul className=' font-inconsolata my-2 list-disc ml-5'>
          <li>
            Sugar
          </li>
          <li>
            White
          </li>
          <li>
            Mocha
          </li>
          <li>
            Espresso
          </li>
          <li>
            Chocolate
          </li>
        </ul>
        <p className='my-2'>
          Exercise is a body activity that enhances or maintains physical fitness and overall health and wellness.It is performed for various reasons, to aid growth and improve strength, develop muscles and the cardiovascular system, hone athletic skills, weight loss or maintenance, improve health, or simply for enjoyment. Many individuals choose to exercise outdoors where they can congregate in groups, socialize, and improve their well-being as well as their mental health.
        </p>
        <p className='my-2'>
          Physical exercise is important for maintaining physical fitness and can contribute to maintaining a healthy weight, regulating the digestive system, building and maintaining healthy bone density, muscle strength, and joint mobility, promoting physiological well-being, reducing surgical risks, and strengthening the immune system. Some studies indicate that exercise may increase life expectancy and the overall quality of life.
        </p>
        
        <iframe className='w-full h-[450px] my-4' src="https://www.youtube.com/embed/lAd3LYIZMjs?si=CjStiCxD9wILoTyO&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h3 className='text-2xl font-extrabold'>
          Classification
        </h3>
        <p className='my-2'>
          Aerobic exercise is any physical activity that uses large muscle groups and causes the body to use more oxygen than it would while resting. The goal of aerobic exercise is to increase cardiovascular endurance. Examples of aerobic exercise include running, cycling, swimming, brisk walking, skipping rope, rowing, hiking, dancing, playing tennis, continuous training, and long-distance running. Anaerobic exercise, which includes strength and resistance training, can firm, strengthen, and increase muscle mass, as well as improve bone density, balance, and coordination. Examples of strength exercises are push-ups, pull-ups, lunges, squats, and bench presses
        </p>

      </div>

    </section>
    )
    return Content;
  }
}

export default Blog
