import React from 'react'
import TopMessage from './TopMessage'
import Image from 'next/image'
import NavLinks from './NavLinks'
import Cart from './Cart'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <>
        <TopMessage />
        <header id='header' className='sticky top-0 z-10'>
            <nav id='nav' className='bg-primary  flex justify-between px-40 items-center gap p-3 shadow-md'>
                
                <div id="nav-links" className='flex justify-between items-center text-xl gap-5 font-bold'>
                    <NavLinks />
                </div>

                <div className='w-96 text-center'>
                    <Image src='/images/cafiend-logo.svg' alt='cafiend-logo' width={148} height={51} />
                </div>

                <div id='search-cart' className='flex gap-5 justify-between items-center'>
                    <SearchBar />
                    <Cart />
                </div>
                
            </nav>
        </header>
    </>
  )
}

export default Navbar