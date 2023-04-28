import React from 'react'

const Stats = (props) => {
  return (
    <div className='flex flex-col w-[90%] my-4 self-center'>
      <p className='text-white text-[14px] font-medium py-3'>{props.title}</p>
      <div className={`absolute mb-10 ml-40`}>
        <div className='bubble'>
            <p className='pt-[7px]'>{props.percentageText}</p>
        </div>
        <div className='pointer'></div>
      </div>
      <div className='w-[100%] bg-lightGrey'> 
        <div className={`${props.percentage} h-[7px] bg-gradient-to-r from-gradstart via-gradmid to-accent`}/>
      </div>
    </div>
  )
}

export default Stats
