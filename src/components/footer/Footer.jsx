import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {ImGithub} from 'react-icons/im'

function Footer() {
  return (
    <footer id='endfooter'>
      <a href="#" className='footer__logo'>Xaypanya P.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Xaypanya.Phongsaaaa"><FaFacebookF/></a>
        <a href="https://github.com/Xaypanya"><ImGithub/></a>
        <a href="https://www.instagram.com/xaypanya_phongsa"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Xaypanya Phongsa. All rights reserved since 2022.</small>
      </div>
    </footer>
  )
}

export default Footer