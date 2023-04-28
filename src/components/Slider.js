import React from 'react'
import { SliderPost } from '../components' 
import { test } from '../constants'

const Slider = () => {

  return (
    <div className='flex lg:flex-row flex-col gap-5 w-[100%]'>
        {test.map((person, index) => (
            <SliderPost key={person.id} img={person.img} name={person.name} title={person.title} workplace={person.workplace} comment={person.comment}/>
        ))}
    </div>
  )
}

export default Slider
