import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/xaypanya-phongsa/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Xaypanya" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/Xaypanya.Phongsaaaa" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials