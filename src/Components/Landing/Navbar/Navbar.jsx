import React from 'react'
import logo from '/src/assets/wonderful-jogja-logo.svg'
import NavbarLang from './navbarLang'


const Navbar = () => {
  return (
    <div className='w-[90vw] bg-transparent h-[72px] absolute top-0 flex justify-between items-center'>
      <img src={logo} alt="" />
      <NavbarLang />
    </div>
  )
}

export default Navbar

