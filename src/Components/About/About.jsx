import React from 'react'
import AbtMap from './AbtMap'
import AbtText from './AbtText'

const About = () => {
  return (
    <div className=' flex justify-center pt-12 h-[50rem] bg-background1  w-screen'>
      <div className='flex h-[25rem] bg-white rounded-xl flex-col'>
        <AbtText />
        <AbtMap />
      </div>
    </div>
  )
}

export default About
