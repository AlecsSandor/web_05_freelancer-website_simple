import React from 'react'
import { useState } from 'react'

import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center bg-secondary'>
      {/* Logo / company name */}
      <div className='md:ml-16 ml-8 font-poppins font-bold tracking-wide cursor-pointer'>
        <span className='text-white'>Alex</span>
        <span className='text-accent'>Eex</span>
      </div>

      {/* Menu for large devices */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 md:mr-12'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-[12px] ${
            index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'
          } text-dimWhite hoverAccent`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger toggle menu for small devices */}
      <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer mr-8 z-50'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {/* Menu for small devices */}
      <div className={`${ toggle ? 'flex' : 'hidden' } w-full h-full absolute bg-lightGrey top-0 z-40 sm:hidden`}>  
          <ul className='list-none flex flex-col justify-start items-center flex-1 mt-40'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] uppercase ${
                  index === navLinks.lenght - 1 ? 'mr-0' : 'mb-4'
                } text-white hoverAccent`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

    </nav>
  )
}

export default Navbar
