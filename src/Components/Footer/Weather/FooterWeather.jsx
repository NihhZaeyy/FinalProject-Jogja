import React from 'react'
import Temperature from './Temperature'
import JogjaTime from './JogjaTime'

function FooterWeather() {
  return (
    <div className='w-screen p-7 h-[20rem] bg-button2'>
        <Temperature />
        <JogjaTime />
        <div className='mt-3'>
            <p className='font-Poppins font-medium text-lg'>Yogyakarta Region: cloudy</p>
        </div>
    </div>
  )
}

export default FooterWeather
