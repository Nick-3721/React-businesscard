import React from 'react'
import Info from './Info.jsx'
import About from './About.jsx'
import Interests from './Interests.jsx'
import Footer from './Footer.jsx'

export default function App() {
  return (
    <div className='card'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}