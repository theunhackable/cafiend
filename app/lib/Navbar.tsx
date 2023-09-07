"use client"
import React, { useState } from 'react'
import TopMessage from './TopMessage'
import Image from 'next/image'
import NavLinks from './NavLinks'
import Cart from './Cart'
import SearchBar from './SearchBar'
import { AnimatePresence, motion } from 'framer-motion'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);
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
                    <SearchBar />
                    <Cart />
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
                    initial={{ y: "-1000%" }}
                    animate={{ y: 0 }}
                    exit={{ y:"-1000%" }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col fixed bg-primary p-4 pt-24  top-16 w-full'>
                        
                        <div id="nav-links" className='flex flex-col justify-between items-center text-xl gap-5 font-bold'>
                            <NavLinks />
                        </div>
                    </motion.div>
                </div>
            )}
            </AnimatePresence>

        
    </>
  )
}

export default Navbar