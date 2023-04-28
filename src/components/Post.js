import React from 'react'

const Post = (props) => {
  return (
    <div className='flex flex-col bg-secondary p-7 mb-6 hoverPost post-animation'>
        <h2 className='text-white text-[22px] font-medium py-3'>{props.post.title}</h2>
        <p className='text-white text-[12px] pb-9'>{props.post.info}</p>
        <img src={props.img} alt='' className=' min-w-[50px] hoverImg cursor-pointer'/>
        <ul className='inline-flex space-x-1 py-6'> 
            {props.post.tags.map((tag) => (
              <li className='text-darkWhite text-[12px] py-2 px-4 bg-lightGrey hoverAccent cursor-pointer'>
                {tag}
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Post
