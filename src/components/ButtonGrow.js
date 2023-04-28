import React from 'react'

const ButtonGrow = () => {
  return (
    <div className='flex flex-col grow-parent cursor-pointer mt-9'>
        <button className='text-darkWhite font-thin letter-spaced text-[12px] self-center grow-parent'>
            CLICK NOW
        </button>
        <span className='h-[1px] bgr-gradient mt-2 grow-underline'></span>
    </div>
  )
}

export default ButtonGrow
