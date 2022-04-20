import React,{useState} from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {GoPackage} from 'react-icons/go'
import {CgBriefcase} from 'react-icons/cg'
import {BiMessageSquareDetail} from 'react-icons/bi'


function Nav() {

    const [activeNav, setActiveNav] = useState('#')

    return (
       <nav>
            <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={()=> setActiveNav('#')}><AiOutlineHome/></a>
            <a href="#about" className={activeNav === '#about' ? 'active' : ''}  onClick={()=> setActiveNav('#about')}><AiOutlineUser/></a>
            <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={()=> setActiveNav('#experience')}><CgBriefcase/></a>
            <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={()=> setActiveNav('#portfolio')}><GoPackage/></a>
            <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={()=> setActiveNav('#contact')}><BiMessageSquareDetail/></a>
       </nav>
    )
}

export default Nav
