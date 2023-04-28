import React from 'react'
import {useState} from 'react'

import styles from '../style'
import { categories, posts } from '../constants'
import { Post } from '../components'

const Portfolio = () => {
  const [select, setSelect] = useState('01')
  return (
    <section id='portfolio' className={`items-center ${styles.paddingB}`}>
      <div className={`${styles.sectionLine} right-0`}></div>
      <div className={`${styles.sectionHeading}`}>
        <p className={`${styles.paragraph}`}>PORTFOLIO</p>
        <h3 className={`${styles.paragraphSubtitle}`}>My Recent Web Design &<br/> Some Past Projects</h3>
      </div>
      <div className={`flex flex-col ${styles.paddingX} max-w-[1060px]`}>
        <ul className='list-none inline-flex text-dimWhite text-[13px] mb-5'>
          {categories.map((cat) => (
            <li key={cat.id} className={`font-poppins font-normal cursor-pointer flex flex-col
            ${cat.id === '01' ? 'ml-0' : 'ml-10'}`}
              onClick={() => setSelect((select) => cat.id)}>
              <span className=''>{`${cat.title}`}</span>
              <span className={`w-[100%] h-[2px] bg-accent mt-2 post-animation ${cat.id === select ? 'block' : 'hidden'}`}></span>
            </li>
          ))}
        </ul>
        <div className='columns-1 sm:columns-2 gap-6'>
          {posts.map((post, index) => (
            post.category === select ? <Post key={post.id} post={post} img={post.img}/> : <span className='hidden'></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
