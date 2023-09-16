"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { products } from '../data/data'
import CartContext from '../Context/store'

const Product = ({name, price, image_url}: Product) => {

  const {cart, setCart, total, setTotal} = useContext(CartContext)

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const product = {name, price, image_url}
    cart.find(item => item.name === product.name) ? setCart((prev) => {
      const newCart = [...prev]
      const index = newCart.findIndex(item => item.name === product.name)
      newCart[index].quantity++
      setTotal((prev) => prev + newCart[index].price)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    }): setCart((prev) => {
      const newCart = [...prev, {...product, quantity: 1}]
      localStorage.setItem('cart', JSON.stringify(newCart));
      setTotal((prev) => prev + product.price)
      return newCart;
    })

  }
  return (
    <div className='flex flex-col text-center items-center border-2 hover:border-dark py-16 max-lg:px-12 mx-2 md:px-32 w-fit'>
      
      <h2 className='text-3xl font-extrabold'>
        {name}
      </h2>
      
      <p className='mb-2'>
        $ {price} USD
      </p>

      <Image src={`/images/${image_url}`} alt={image_url} width={222} height={400}/>
      
      <button onClick={addToCart} className='
        p-10 py-3 mt-6 w-fit
       bg-primary hover:bg-dark text-dark hover:text-primary
        border border-black 
        rounded-md
      '>
        ADD TO CART
      </button>
    </div>
  )
}



const ProductLine = () => {
  
  return (
    <div className='flex flex-wrap items-center gap-10 justify-center'>
      {products.map((product, index) => (<Product key={index} {...product} />))}
    </div>
  )
}

export default ProductLine
