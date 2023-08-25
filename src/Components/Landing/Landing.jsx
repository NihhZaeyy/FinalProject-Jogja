import React from 'react'
import Navbar from './Navbar/Navbar'
import LandingText from './LandingText/LandingText'
import BotButton from './Landing-bot/BotButton'
import BgVideo from './BgVideo/BgVideo'


const Landing = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center '>
         <Navbar />
         <LandingText />
         <BotButton />
         <BgVideo />  
    </div>
  )
}

export default Landing
