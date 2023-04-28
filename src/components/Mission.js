import React from 'react'
import styles from '../style'
import { Stats } from '../components'

const Mission = () => {
  return (
    <section id='mission' className={`items-center ${styles.paddingB} w-[97%] max-w-[1900px]`}>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-stretch w-[100%]'>
        <div className={`bg-[url('./assets/mission.jpg')] bg-no-repeat bg-cover md:h-[700px] w-[100%] h-[400px] mb-10`}/>
        <div className='flex flex-col md:ml-10 ml-0'>
          <h3 className='text-white md:text-[60px] text-[40px] mb-10 text-gradient font-semibold'>UI/UX<br/>Designer</h3>
          <p className='text-dimWhite text-[24px] font-medium mb-10'>We help you to create stunning appearences and successful strategies</p>
          <p className='text-dimWhite text-[15px] font-normal mb-10'>I am Alex. I create award-winning websites, remarkable brands and cutting-edge apps.</p>
          <Stats percentageText='70%' percentage='w-[70%]' bubble='right-20' title='UI/UX Design'/>
          <Stats percentageText='90%' percentage='w-[90%]' bubble='right-20' title='App Development'/>
        </div>
      </div>
    </section>
  )
}

export default Mission
