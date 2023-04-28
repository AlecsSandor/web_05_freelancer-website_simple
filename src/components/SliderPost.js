import React from 'react'
import { c_01 } from '../assets'

const SliderPost = (props) => {
  return (
    <div className='itemComments w-[100%] flex flex-row p-10'>
      <div className='flex flex-col justify-center pr-7'>
        <div className='w-[85px] h-[85px] justify-center flex rounded-full bg-lightGrey'>
          <img src={props.img} className='w-[70px] h-[70px] rounded-full self-center' alt='client' />
        </div>
        <h2 className='text-gradient text-[15px] font-bold pt-4'>{props.name}</h2>
        <p className='text-dimWhite text-[13px] leading-5'>{props.title},<br />{props.workplace}</p>
      </div>

      <div className='border-l border-lightGrey pl-7 flex items-center'>
        <p className='text-white md:text-[28px] text-[18px]'>{props.comment}</p>
      </div>
    </div>
  )
}

export default SliderPost
