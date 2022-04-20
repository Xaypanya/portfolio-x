import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import xaypanya_pfp from '../../assets/xaypanya-nobg.png'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Xaypanya Phongsa</h1>
        <h5 className="text-light">Web Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={xaypanya_pfp} alt="Xaypanya Phongsa Profile PNG" />
        </div>

        <a href="#endfooter" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header