import React from 'react'
import './Portfolio.css'
import pf1 from '../../assets/PF1-LaoSharpM.jpg'
import pf2 from '../../assets/PF2-3cw2MeetLinks.jpg'
import pf3 from '../../assets/PF3-LaoDerm.jpg'
import pf4 from '../../assets/PF4-WebGL.jpg'
import pf5 from '../../assets/PF5-Lao-TB.jpg'
import pf6 from '../../assets/PF6-Kaidao-Coup.jpg'
import pf7 from '../../assets/PF7-PakatClimate.jpg'

const portfolioData = [
  {
    id: 1,
    imageUrl: pf1,
    title: "Lao#M - Music Streaming",
    github: "https://github.com/Xaypanya/LaoSharpM",
    demo: "https://xaypanya.github.io/LaoSharpM/"
  },
  {
    id: 2,
    imageUrl: pf2,
    title: "3CW2 Meet Links - Study Table",
    github: "https://github.com/Xaypanya/3CW2-Meet-Links",
    demo: "https://www.ohwow-cw.ml"
  },
  {
    id: 3,
    imageUrl: pf3,
    title: "LaoDerm - Hotel",
    github: "https://github.com/Xaypanya/LaoDerm-Hotel",
    demo: "https://laoderm.netlify.app/"
  },
  {
    id: 4,
    imageUrl: pf4,
    title: "WebGL-X - 2D Image Made From Code",
    github: "https://github.com/Xaypanya/WebGL-X",
    demo: "https://xaypanya.github.io/WebGL-X"
  },
  {
    id: 5,
    imageUrl: pf5,
    title: "LaoTB - Text Book Resources",
    github: "https://github.com/Xaypanya/Lao-TB",
    demo: "https://xaypanya.github.io/Lao-TB"
  },
  {
    id: 6,
    imageUrl: pf6,
    title: "Kaidao Coup - Boardgame Lao Version",
    github: "https://github.com/Xaypanya/coup-production",
    demo: "https://kaidao-coup.netlify.app/"
  },
  {
    id: 7,
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
          <a href={portfolio.github} target="_blank" className='btn'>GitHub</a>
          <a href={portfolio.demo} target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
        ))}
      </div>

    </section>
  )
}

export default Portfolio