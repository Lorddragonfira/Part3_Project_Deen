import React from 'react'
import pic1 from '../images/BeachBoy.png'
import pic2 from '../images/smoothSailing.png'
import pic3 from '../images/Cerveza.png'
import pic4 from '../images/Outsider.png'

function CardMusic() {

  return (

    <div className='music-music-wrapper'>

        <div className="music-music-content">
                <div className="album-new">
                    <a href="https://open.spotify.com/album/4eu8r8yNqSrvnrrWU5qv7i" target="_blank">
                    <img src={pic1} alt="pic1" />
                    </a>
                    <figcaption className='title'>Beach Boy</figcaption>   
                    <a href='https://open.spotify.com/album/4eu8r8yNqSrvnrrWU5qv7i'><figcaption className='title'>Buy Now</figcaption></a>     
                </div>

                

                <div className="album-new">
                    <a href="https://open.spotify.com/album/3pWqT8zkAPqlbxr0KzoUGE" target="_blank"> 
                    <img src={pic2} alt="pic2" />
                    </a>
                    <figcaption className='title'>Smooth Sailing</figcaption>    
                    <a href='https://open.spotify.com/album/3pWqT8zkAPqlbxr0KzoUGE'><figcaption className='title'>Buy Now</figcaption></a>  
                </div>


                <div className="album-new">
                    <a href="https://open.spotify.com/album/2v98v8knyHakXuKL0HbemB" target="_blank"> 
                    <img src={pic4} alt="pic4" />
                    </a>
                    <figcaption className='title'>Outsider</figcaption>  
                    <a href='https://open.spotify.com/album/2v98v8knyHakXuKL0HbemB'><figcaption className='title'>Buy Now</figcaption></a>    
                </div>
        </div>

    </div>
    )
}

export default CardMusic