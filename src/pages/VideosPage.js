import React from 'react'
import Hero from '../components/Hero'
import CardMusic from '../components/CardMusic'
import CardVideo from '../components/CardVideo'
import CardWriting from '../components/CardWriting'
import Navbar from '../components/navbar'
import CardVideoVideo from '../components/CardVideoVideo'

function VideosPage() {
  return (
    <div className='page-nav'>
       <Navbar/>
        <div className='content'>
        <CardVideoVideo/>
        </div>
    </div>
  )
}

export default VideosPage