import React from 'react'
import FooterWeather from './Weather/FooterWeather'
import FooterSocials from './Socials/FooterSocials'

const Footer = () => {
  return (
    <div className='h-fit w-screen mx-auto bg-white'>
      <FooterWeather />
      <FooterSocials />
    </div>
  )
}

export default Footer
