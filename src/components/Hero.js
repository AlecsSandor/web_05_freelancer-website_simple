import React from 'react'
import styles from '../style'
import {headshot, mail} from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`items-center ${styles.paddingY}`}>
      {/* {Headshot & text} */}
      <div className='flex flex-col md:flex-row items-center'>
        <div className='min-w-[290px] min-h-[290px] flex
        sm:self-start self-center rounded-full md:mb-0 mb-14
        bg-gradient-to-r from-gradstart via-gradmid to-accent'>
          <img src= {headshot} alt='headshot' className='rounded-full w-[280px] h-[280px] m-auto'/>
        </div>
        <p className='text-white font-poppins text-[22px] text-center font-medium sm:text-[35px] sm:text-left md:ml-32'>
          Hello, my name is Alex and I love designing and coding websites and web apps. <br/>
          I create
          <span className='text-gradient font-bold'> Web Experiences</span>
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-96 mt-28'>
        <div className='flex flex-row items-center'>
          <p className='text-white text-[50px]'>5</p>
          <p className='text-darkWhite text-[12px] ml-4 leading-6'>YEARS<br/>OF EXPERIENCE</p>
        </div>
        <div className='flex flex-row items-center'>
          <p className='text-white text-[50px]'>79</p>
          <p className='text-darkWhite text-[12px] ml-4 leading-6'>PROJECTS COMPLETED<br/>IN 5 COUNTRIES</p>
        </div>
      </div>
      <div className='flex flex-col items-end mt-10'>
        <div className='flex flex-row items-center'>
          <p className='text-darkWhite text-[15px] ml-4 leading-4 text-right'>GET IN TOUCH<br/><span className='text-white'>alexeex@mydomain.com</span></p>
          <img src={mail} alt='mail' className=' w-[50px] h-[50px] ml-6' />
        </div>
      </div>
    </section>
  )
}

export default Hero
