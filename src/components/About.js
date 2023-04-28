import React from 'react'
import styles from '../style'
import { features } from '../constants'

const About = () => {
  return (
    <section id='about' className={`items-center ${styles.paddingB}`}>
      <div className={`${styles.sectionLine} left-0`}></div>
      <div className={`${styles.sectionHeading}`}>
        <p className={`${styles.paragraph}`}>BEST FEATURES</p>
        <h3 className={`${styles.paragraphSubtitle}`}>Digital product development.<br/> This is what we do</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {features.map((feature) => (
          <div key={feature.id} className='flex flex-col items-left py-16 px-10 bg-secondary m-2'>
            <p className='text-[18px] text-dimWhite mb-5'>{feature.title}</p>
            <p className='text-[16px] text-darkWhite'>{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
