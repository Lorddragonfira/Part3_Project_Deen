import React from 'react'
// import pic1 from '../images/BeachBoy.png'
// import pic2 from '../images/smoothSailing.png'

function CardVideo() {
  return (
    <div className='video-wrapper'>
	    <div className='video-title-container'>
		    <div className="video-title">
               <h1>Video</h1> 
            </div>
	    </div>

        <div className="video-content">

                <div className="video-new">
                    <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/irnFjGzJHoQ" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>

                <div className="video-new">
                    <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/gADYEc8MeM8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
        </div>

    </div>
    )
}

export default CardVideo