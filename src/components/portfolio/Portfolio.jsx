import React from 'react'
import './Portfolio.css'
import pf1 from '../../assets/PF1-LaoSharpM.jpg'
import pf2 from '../../assets/PF2-3cw2MeetLinks.jpg'
import pf3 from '../../assets/PF3-LaoDerm.jpg'
import pf4 from '../../assets/PF4-WebGL.jpg'
import pf5 from '../../assets/PF5-Lao-TB.jpg'
import pf6 from '../../assets/PF6-Kaidao-Coup.jpg'
import pf7 from '../../assets/PF7-PakatClimate.jpg'
import hoh from '../../assets/hoh.png'
import cc from '../../assets/cc.png'
import tb from '../../assets/tb.png'
import fd from '../../assets/fd.png'
import kd from '../../assets/kd.png'

const portfolioData = [
  {
    imageUrl: hoh,
    title: "Hands of Hope - School For The Deaf",
    github: "",
    demo: "https://handsofhope-laos.netlify.app/"
  },
  {
    imageUrl: kd,
    title: "Kaidao Studio - Avatar Generator",
    github: "https://github.com/Xaypanya/kaidao-studio",
    demo: "https://kaidao-studio.com/"
  },
  {
    imageUrl: cc,
    title: "Caption Lao - Famous People's Qoute",
    github: "",
    demo: "https://caption-lao-demo.netlify.app/"
  },
  {
    imageUrl: tb,
    title: "Kaidao Books - New Free Textbook Resource",
    github: "",
    demo: "https://kaidao-books.netlify.app/"
  },
  {
    imageUrl: fd,
    title: "Finder Service - Fixing Service For You",
    github: "",
    demo: "https://finder-service.netlify.app/"
  },
  {
    imageUrl: pf2,
    title: "3CW2 Meet Links - Study Table",
    github: "https://github.com/Xaypanya/3CW2-Meet-Links",
    demo: "https://www.ohwow-cw.ml"
  },
  {
    imageUrl: pf1,
    title: "Lao#M - Music Streaming",
    github: "https://github.com/Xaypanya/LaoSharpM",
    demo: "https://xaypanya.github.io/LaoSharpM/"
  },
  {
    imageUrl: pf3,
    title: "LaoDerm - Hotel",
    github: "https://github.com/Xaypanya/LaoDerm-Hotel",
    demo: "https://laoderm.netlify.app/"
  },
  {
    imageUrl: pf4,
    title: "WebGL-X - 2D Image Made From Code",
    github: "https://github.com/Xaypanya/WebGL-X",
    demo: "https://xaypanya.github.io/WebGL-X"
  },
  {
    imageUrl: pf5,
    title: "LaoTB - Text Book Resources",
    github: "https://github.com/Xaypanya/Lao-TB",
    demo: "https://xaypanya.github.io/Lao-TB"
  },
  {
    imageUrl: pf6,
    title: "Kaidao Coup - Boardgame Lao Version",
    github: "https://github.com/Xaypanya/coup-production",
    demo: "https://kaidao-coup.netlify.app/"
  },
  {
    imageUrl: pf7,
    title: "Pakat Climate - Climate Action Blogs",
    github: "https://github.com/Xaypanya/Pakat-Climate/",
    demo: "https://xaypanya.github.io/Pakat-Climate/"
  },

]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((portfolio)=>(
          <article key={portfolio.id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={portfolio.imageUrl} alt={portfolio.title} />
          </div>
          <h3>{portfolio.title}</h3>
          <div className="portfolio__item-cta">
          <a href={portfolio.github} target="_blank" style={portfolio.github == "" ? {pointerEvents: "none", opacity: "20%"} : {}} className='btn'>GitHub</a>
          <a href={portfolio.demo} target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
        ))}
      </div>

    </section>
  )
}

export default Portfolio