import React from 'react'
import styles from '../style'

const Contact = () => {
  return (
    <section id='contact' className={`items-center pb-32 flex flex-col`}>
      <div className={`${styles.sectionHeading}`}>
        <p className={`${styles.paragraph}`}>CONTACT US</p>
        <h3 className={`${styles.paragraphSubtitle}`}>Let's Get in Touch and Make<br/>Magic Together</h3>
      </div>
      <form className='flex flex-col px-5 md:px-20 w-[100%] text-[13px]  text-white'>
        <input name="name" type="text" placeholder='Name' className='border-b border-lightGrey bg-tertiary py-5 mt-10 outline-0	pl-3'></input>
        <input name="email" type="text" placeholder='Email' className='border-b border-lightGrey bg-tertiary py-5 mt-10 outline-0	pl-3'></input>
        <textarea name="message" placeholder='Message' className='border-b border-lightGrey bg-tertiary py-5 mt-20 outline-0 pl-3'></textarea>
        <button type="submit" className='p-3 border-white border sm:w-[30%] w-[40%] rounded-md self-center mt-12 fillButton'> Send Message</button>
      </form>
    </section>
  )
}

export default Contact
