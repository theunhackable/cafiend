import Image from 'next/image'
import React from 'react'


type Props = {
  title: string,
  date: string,
  image_url: string,
}

const Post = ({ title, date, image_url }: Props) => {
  return (
        <div id="blog-card" className=" photo w-[400px] overflow-clip">
          <div className="blog-img">
            <Image className='rounded-md' src={`/images/${image_url}`} alt={`${image_url}`} width={400} height={300} />
          </div>
          <p className=' my-6'>
            {date}
          </p>
          <h3 className='font-extrabold text-2xl text-wrap leading-tight'>
          {title}
          </h3>
        </div>
  )
}


const posts = [
  {
    image_url: 'cofee-blog-1-1.png',
    date: 'Apr 20, 2023',
    title: 'COFFEE: FUEL FOR PRODUCTIVITY AND FOCUS'
  },
  {
    image_url: 'cofee-blog-2-1.png',
    date: 'Apr 20, 2023',
    title: 'THE CULTURE AND HISTORY OF COFFEE.'
  },
  {
    image_url: 'cofee-blog-7-1.png',
    date: 'Apr 20, 2023',
    title: 'COFFEE: A STIMULANT FOR CREATIVITY.'
  }
]

const Posts = () => {
  return (
    <section id='posts' className='py-32 flex flex-col bg-dark text-primary'>

      <h1 className='text-5xl leading-tight text-center font-bold'>
        OUR RECENT POSTS
      </h1>

      <div id="blogs-container" className='flex mt-16 flex-wrap items-center justify-center gap-16'>

        {posts.map((post, ind) => ( <Post key={ind} {...post} /> ))}
        
      </div>
    </section>
  )
}

export default Posts
