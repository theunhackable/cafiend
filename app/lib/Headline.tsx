type HeadLineProps = {
  title: string,
  items: string[]
}

const HeadLine = ({title, items}: HeadLineProps) => {
  return (
    <div id="container" className="lg:m-6 max-lg:my-5 p-5 border border-white/20 rounded-md w-fill">
      <h2 className='font-extrabold text-3xl'>
        {title}
      </h2>
      <ul className=' font-inconsolata list-disc mt-6 ml-6'>
        {
          items.map((item, index) => ( <li key={index} className='mb-3'> { item } </li> ))
        }
      </ul>
    </div>
  )
}

export default HeadLine