import React from 'react'
import pic1 from '../images/BeachBoy.png'
import pic2 from '../images/smoothSailing.png'
import pic3 from '../images/Cerveza.png'
import pic4 from '../images/Outsider.png'

function CardMusic() {

  return (

    <div className='music-wrapper'>
	    <div className='music-title-container'>
		    <div className="music-title">
               <h1>MUSIC</h1> 
            </div>
	    </div>

        <div className="music-content">
                <div className="album-new">
                    <a href="https://open.spotify.com/album/4eu8r8yNqSrvnrrWU5qv7i" target="_blank">
                    <img src={pic1} alt="pic1" />
                    </a>
                </div>

                <div className="album-new">
                    <a href="https://open.spotify.com/album/3pWqT8zkAPqlbxr0KzoUGE" target="_blank"> 
                    <img src={pic2} alt="pic2" />
                    </a>
                </div>

                <div className="album-new">
                    <a href="https://open.spotify.com/album/4K6qr03R8Ksdi46GrYL5QD" target="_blank"> 
                    <img src={pic3} alt="pic3" />
                    </a>
                </div>

                <div className="album-new">
                    <a href="https://open.spotify.com/album/2v98v8knyHakXuKL0HbemB" target="_blank"> 
                    <img src={pic4} alt="pic4" />
                    </a>
                </div>
        </div>

    </div>
    )
}

export default CardMusic