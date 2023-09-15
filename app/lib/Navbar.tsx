"use client"
import React, { useContext, useState } from 'react'
import TopMessage from './TopMessage'
import Image from 'next/image'
import NavLinks from './NavLinks'
import Cart from './Cart'
import { AnimatePresence, motion } from 'framer-motion'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import Button from './Button'
import CartContext from '../Context/store'
import CartItems from './CartItems'

const Navbar = () => {
    const {cart, setCart} = useContext(CartContext)
    const [isOpened, setIsOpened] = useState(false);
    const [cartOpened, setCartOpened] = useState(false);
    const handleCart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setCartOpened((prev) => !prev);
    }
    return (
    <>
        <TopMessage />
        <header id='header' className='sticky top-0 z-20'>
            <nav id='nav' className='bg-primary  flex justify-between max-lg:px-2 px-40 items-center gap p-3 shadow-md'>
                
                <div id="nav-links" className='flex justify-between max-lg:hidden items-center text-xl gap-5 font-bold'>
                    <NavLinks />
                </div>

                <div className='w-96 text-center'>
                    <Image src='/images/cafiend-logo.svg' alt='cafiend-logo' width={148} height={51} />
                </div>

                <div id='search-cart' className='flex gap-5 justify-between items-center'>
                    
                    <Cart handleCart={handleCart} />
                    
                    <button onClick={(e) => {e.preventDefault(); setIsOpened((prev) => !prev)}} className='lg:hidden text-primary bg-dark p-2 rounded-md'>
                        {isOpened ? (<AiOutlineClose type='button' className='text-xl'/>) : (<BiMenuAltRight type='button' className='text-xl' />) }
                    </button>
                
                </div>
                
                
            </nav>
            
        </header>
        <AnimatePresence>
            {isOpened && (
                <div className='lg:hidden z-10 fixed top-0 w-screen h-screen bg-transparent backdrop-blur-lg' onClick={() => {setIsOpened((prev) => !prev)}}>
                    <motion.div 
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y:"-100%" }}
                    transition={{ duration: 0.2 }}
                    className='flex flex-col fixed bg-primary p-4 pt-24  top-16 w-full'>
                        
                        <div id="nav-links" className='flex flex-col justify-between items-center text-xl gap-5 font-bold'>
                            <NavLinks />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

        {/* for cart */}
        
        <AnimatePresence>
            {cartOpened && (
                <>
                <div className=' z-10 fixed top-0 w-screen h-[100%] bg-black/80 backdrop-blur-md' onClick={() => {setCartOpened((prev) => !prev)}} />
                    <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x:"150%" }}
                    transition={{ duration: 0.2 }}
                    className='z-10 flex flex-col overflow-y-auto fixed bg-primary p-4 pt-24  top-16 right-0 max-sm:w-full max-md:w-[60%] w-[40%] h-full items-center'>
                        {cart.length === 0 ? <h1 className="text-3xl">Your cart is empty</h1> :(
                            <>

                                <CartItems />
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        
    </>
  )
}

export default Navbar