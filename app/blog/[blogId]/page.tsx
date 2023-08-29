import React from 'react'

type Props = {
          params: {
            blogId: string
          }
}

const Blog = ({params:{ blogId }}: Props) => {
  let ind = parseInt(blogId) ? parseInt(blogId) : -1

  return (

   ind === -1 ? (
    <h1 className=' bg-primary flex flex-col font-extrabold text-6xl h-[40vh] text-red-500 text-center justify-center'>
      Blog not found
    </h1>
   ):(
    <p>
      {/* replace this with the actual blog */}
      {blogId}
    </p>
   )
    
  )
}

export default Blog
