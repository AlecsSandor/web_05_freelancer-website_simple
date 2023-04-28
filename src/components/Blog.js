import React from 'react'
import styles from '../style'
import { BlogPost, ButtonGrow } from '../components' 
import { blogPosts } from '../constants'

const Blog = () => {
  return (
    <section id='blog' className={`items-center justify-center flex w-[100%] ${styles.paddingB} bg-secondary`}>
      <div className={`flex md:flex-row flex-col md:px-40 px-5 pt-28`}>
        <div className='flex flex-col md:min-w-[400px] min-w-[200px] items-start mb-5'>
          <p className={`text-[15px] text-white letter-spaced-sec p-1 px-3 rounded-xl ${styles.gradientBg}`}>DIGITAL CONSULTING AGENCY</p>
          <h2 className='text-[30px] font-medium text-[white] py-3'>What Our Trending News.</h2>
          <p className='text-[15px] text-darkWhite py-2'>We provide company and finance service for startups and company business</p>
          <ButtonGrow />
        </div>
        <div className='flex flex-col'>
          {blogPosts.map((post, index) => (
            <BlogPost key={post.id} date={post.date} title={post.title} content={post.content} img={post.img}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
