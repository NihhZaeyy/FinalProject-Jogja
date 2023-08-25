import React from 'react'

const BotButton = () => {
  return (
    <div className='fixed z-10 bottom-10 flex justify-center items-center'>
      <button className='bg-white text-button text-xl rounded-l-lg px-[6px] py-[1px] w-[2.5rem] h-[2.5rem] text-center relative left-1 drop-shadow-md'>
        <ion-icon name="search-outline"></ion-icon>
      </button>
      <button id='botButton' className='text-button bg-button2 text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center rounded-xl z-[1] drop-shadow-md'>
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <button className='bg-white text-button text-xl rounded-r-lg px-[6px] py-[1px] w-[2.5rem] h-[2.5rem] text-center relative right-1 drop-shadow-md'> 
        <ion-icon name="heart-outline"></ion-icon>
      </button>
    </div>
  )
}

export default BotButton
