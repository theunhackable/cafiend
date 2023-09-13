import Image from 'next/image';
import React from 'react';
import {posts} from '../data/data';
import Link from 'next/link';

type Props = {
  title: string,
  date: string,
  small_image_url: string,
  ind: number
}

export const Post = ({ title, date, small_image_url, ind}: Props) => {
  return (
        <Link href={`/blog/${ind}`}id="blog-card" className="photo overflow-clip w-fit">
          <div className="blog-img overflow-hidden">
            <Image className='rounded-md' src={`/images/${small_image_url}`} alt={`${small_image_url}`} width={400} height={300} />
          </div>
          <p className=' my-6'>
            {date}
          </p>
          <h3 className='font-extrabold text-2xl text-wrap leading-tight'>
          {title}
          </h3>
        </Link>
  )
}


const topPosts = posts.slice(0,3) 

const Posts = () => {
  return (
    <section id='posts' className='py-32 flex flex-col bg-dark text-primary'>

      <h1 className='text-5xl leading-tight text-center font-bold'>
        OUR RECENT POSTS
      </h1>

      <div id="blogs-container" className=' m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center'>

        {topPosts.map((post, ind) => ( <Post key={ind} {...post} ind={ind} /> ))}
        
      </div>
    </section>
  )
}

export default Posts
