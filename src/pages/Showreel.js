import React from 'react'
import Hero from '../components/Hero'
import CardMusic from '../components/CardMusic'
import CardVideo from '../components/CardVideo'
import CardWriting from '../components/CardWriting'
import Navbar from '../components/navbar'

function Showreel() {
  return (
    <div className='page-nav'>
       <Navbar/>
        <div className='content'>
        <Hero></Hero>
        <CardMusic></CardMusic>
        <CardVideo></CardVideo>
        <CardWriting></CardWriting>
        </div>
    </div>
  )
}

export default Showreel