import React from 'react'
import PhotoMe from "./assets/photo-of-me.jpg"
import EmailIcon from './assets/icon-email.svg'
import LinkedinIcon from './assets/icon-linkedin.svg'

export default function Info() {
  return(
    <>
      <img src={PhotoMe} alt="me" className='photo--me'/>
      <div className='wrapper'>
        <h1>Nicholas MacDonald</h1>
        <h3>Frontend Developer</h3>
        <a href="nicholasmacdonald.co.uk" className="website--link">nicholasmacdonald.co.uk</a>
        <div className="button--wrapper">
          <a href="mailto:hello@nicholasmacdonald.co.uk" className="button"> 
            <div className="button--text">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact--icon email--icon" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
              Email
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nicholasmacdonalddesign/" className="button blue"> 
            <div className="button--text">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact--icon linkedin--icon" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Linkedin
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
