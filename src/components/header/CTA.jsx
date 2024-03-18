import React from 'react'
import CVpdf from '../../assets/Xaypanya-Resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CVpdf} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA