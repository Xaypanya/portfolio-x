import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {

  const techstack = {
    frontend: [
      "HTML","CSS","JavaScript","ReactJS","VueJS","TailwindCSS","MaterialUI","NuxtJS","TypeScript"
    ],
    backend: [
      "Firebase","NodeJS","Express","MongoDB","MySQL","MS SQL Server"
    ]
  }

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {
                techstack.frontend.map((stack,index)=>(
                  <article key={`frontend-${index}`} className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>{stack}</h4>
                  </div>
                  </article>
                ))
              }
            </div>
          </div>
          {/* ============= END FRONTEND ================== */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
            {
                techstack.backend.map((stack, index)=>(
                  <article key={`backend-${index}`} className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>{stack}</h4>
                  </div>
                  </article>
                ))
              }
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience