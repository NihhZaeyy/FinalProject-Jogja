import React from 'react'
import TngTitle from './TngTitle'
import TngCarousel from './Carousel/TngCarousel'

const Things = () => {
  return (
    <div className='flex flex-col my-0 px-[20px] h-max' >
      <TngTitle />
      <TngCarousel />
    </div>
  )
}

export default Things
