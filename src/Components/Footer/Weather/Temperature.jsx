import React from 'react'

function Temperature() {
  return (
    <div className='flex justify-start items-center gap-5'>
        <div className='text-[36px] text-button'>
            <ion-icon  name="cloud-outline"></ion-icon>
        </div>
        <p className='font-Poppins font-semibold text-xl'>22&deg;C</p>
    </div>
  )
}

export default Temperature
