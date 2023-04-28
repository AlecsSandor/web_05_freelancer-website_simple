import React from 'react'
import styles from '../style'
import { Socials } from '../components'

const Footer = () => {
  return (
    <section id='footer' className={`bg-primary items-center ${styles.paddingY} w-[100%]`}>
      <div className='flex sm:flex-row flex-col md:px-20 px-6 justify-center gap-9'>
        <div className='flex flex-col'>
          <h2 className='text-[25px] text-white py-5'>Contact Us</h2>
          <p className='text-[14px] text-white py-3'>Official Address</p>
          <p className='text-[15px] text-darkWhite font-[200] py-2 pl-4'>504 White St . Dawsonville, GA 30534 , New York</p>
          <p className='text-[14px] text-white py-3'>Email Us</p>
          <p className='text-[15px] text-darkWhite font-[200] py-2 pl-4'>support@gmail.com</p>
          <p className='text-[14px] text-white py-3'>Call Us</p>
          <p className='text-[15px] text-darkWhite font-[200] py-2 pl-4'>+0198-777-889</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[25px] text-white py-5'>Recent News</h2>
          <p className='text-[15px] text-darkWhite font-[200] py-3 pl-4'>Awesome new design for trending business work for unique market</p>
          <p className='text-[14px] text-accent pl-4 font-light cursor-pointer '>Read More</p>
          <p className='text-[15px] text-darkWhite font-[200] py-3 pl-4'>Awesome new design for trending business work for unique market</p>
          <p className='text-[14px] text-accent pl-4 font-light cursor-pointer'>Read More</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[25px] text-white py-5 font-semibold'>Alex<span className='text-accent'>Eex</span></h2>
          <Socials />
        </div>
      </div>
    </section>
  )
}

export default Footer
