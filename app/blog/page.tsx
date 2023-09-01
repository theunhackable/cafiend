import React from 'react'
import { Post } from '../components/Posts'

import { posts } from '../data/data'


const page = () => {
  return (
    <main>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>BLOG</h1>
      </header>
      <section className='flex flex-col justify-center items-center bg-primary'>
        <h1 className='my-16 text-5xl font-extrabold'>
          OUR RECENT POSTS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post, ind) => <Post  key={ind} {...post} ind={ind} />)}
        </div>
      </section>
    
    </main>
  )
}

export default page
