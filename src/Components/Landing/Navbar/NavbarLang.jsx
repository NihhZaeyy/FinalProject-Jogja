import React from 'react'
import Language from '/src/assets/language.png'

const NavbarLang = () => {
  return (
    <div>
        <a href="#">
            <div className='flex gap-2'>
                <p className='text-white'>EN</p>
                <img src={Language} alt="" />
            </div>
        </a>
    </div>
  )
}

export default NavbarLang
