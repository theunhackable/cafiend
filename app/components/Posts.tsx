import Image from 'next/image';
import React from 'react';
import {posts} from '../data/data';

type Props = {
  title: string,
  date: string,
  image_url: string,
}

export const Post = ({ title, date, image_url }: Props) => {
  return (
        <div id="blog-card" className=" photo w-[400px] overflow-clip">
          <div className="blog-img overflow-hidden">
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


const topPosts = posts.slice(0,3) 

const Posts = () => {
  return (
    <section id='posts' className='py-32 flex flex-col bg-dark text-primary'>

      <h1 className='text-5xl leading-tight text-center font-bold'>
        OUR RECENT POSTS
      </h1>

      <div id="blogs-con<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center'>
        

        </div>
tainer" className='flex mt-16 flex-wrap items-center justify-center gap-16'>

        {topPosts.map((post, ind) => ( <Post key={ind} {...post} /> ))}
        
      </div>
    </section>
  )
}

export default Posts
