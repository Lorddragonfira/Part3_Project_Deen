import React from 'react'
import MusicHero from '../components/MusicHero'
import CardMusicMusic from '../components/CardMusicMusic'
import Navbar from '../components/navbar'

function MusicPage() {
  return (
    <div className='page-nav'>
       <Navbar/>
        <div className='content'>
        <MusicHero></MusicHero>
        <CardMusicMusic></CardMusicMusic>
        </div>
    </div>
  )
}

export default MusicPage