import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className='service'>
      <div className="service__head">
        <h3>UX/UI Design</h3>
      </div>
      <div className="service__list">
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Clarify & discuss your business goal, target & challenges</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Wireframe + Visual mood board</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Interactive prototype</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Create a user-centric visual design</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Style Guide for development</p>
        </li>
      </div>
      </article>
      {/* ======= END UX/UI SERVICE ========= */}
      <article className='service'>
      <div className="service__head">
        <h3>Web Development</h3>
      </div>
      <div className="service__list">
        <li>
          <BiCheck className='service__list-icon'/>
          <p>A complete website</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>User-friendly clean, modern and attractive Web Design</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Mobile friendly design</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>SEO Optimization</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Highly Focus on user-experience and usability goals</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Social Media Integration, Google Maps, Contact Forms</p>
        </li>
      </div>
      </article>
      {/* ======= END WEB DEVELOPMENT ========= */}
      <article className='service'>
      <div className="service__head">
        <h3>Web Scraping</h3>
      </div>
      <div className="service__list">
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Web Scraper to collect data from online sites</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Data Extraction from websites with NodeJS Scrapers</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Collecting Emails, Phones, Prices, Product Info from Public Websites</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Extract data from PDF Forms / Files</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Extract data from Images with OCR</p>
        </li>
      </div>
      </article>
      {/* ======= END WEB SCRAPING ========= */}
    </div>
    </section>
  )
}

export default Services