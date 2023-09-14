import Image from 'next/image'
import React from 'react'


const CartItem = () => {
  return (
    <div className='container'>
      <div id="product-details">
        <div className="product-image">
          <Image src="images/coffee1.jpg" alt="product" width={200} height={200}/>
        </div>
        <div id="name-price">
          <h1 className="text-3xl font-bold">
            Nitro
          </h1>
        </div>
      </div>
    </div>
  )
}

const CartItems = () => {
  return (
    <div>
      
    </div>
  )
}

export default CartItems
