import React from 'react'
import styles from '../style'
import { Slider } from '../components'

const Testimonials = () => {
  return (
    <section id='testimonials' className={`items-center ${styles.paddingB} w-[95%] max-w-[1900px]`}>
      <div className={`${styles.sectionHeading}`}>
        <p className={`${styles.paragraph}`}>TESTIMONIALS</p>
        <h3 className={`${styles.paragraphSubtitle}`}>We love our clients from all<br/> over the world</h3>
      </div>
      <Slider />
    </section>
  )
}

export default Testimonials
