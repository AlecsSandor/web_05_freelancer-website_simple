import React from 'react'


const BlogPost = (props) => {
  return (
    <div className='flex sm:flex-row flex-col border-b border-lightGrey items-center py-9 cursor-pointer'>
        <div className={`${props.img} bg-no-repeat bg-cover sm:w-[300px] h-[150px] w-[100%] min-w-[120px]`}/>
        <div className='flex flex-col px-6'>
            <p className='text-[12px] font-light text-darkWhite letter-spaced-sec py-3'>{props.date} / <span className='text-accent'>BLOG - WORDPRESS</span></p>
            <h2 className='text-[24px] text-white font-bold leading-6 py-3'>
                {props.title}
            </h2>
            <p className='text-[15px] text-darkWhite py-3'>
                {props.content}
            </p>
        </div>
    </div>
  )
}

export default BlogPost
