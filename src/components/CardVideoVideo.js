import React from 'react'
import pic1 from '../images/Alchemy2.png'
import pic2 from '../images/Alchemy1.png'
import pic3 from '../images/DeenoDeeno2.png'
import pic4 from '../images/Deenodeeno1.png'

function CardVideoVideo() {
    return (
        <div className='videovideo-wrapper'>
            <div className="video-picture-content">
                <div className="video-picture-new">
                        <img src={pic1} alt="pic1" />
                </div>

                <div className="video-picture-new">
                        <img src={pic2} alt="pic2" />
                </div>
            </div>

            <div className="videovideo-content">

                <div className="videovideo-new">
                    <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/irnFjGzJHoQ"
                        title="YouTube video player"
                        frameborder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>

            <div className="video-picture-content">
                <div className="video-picture-new">
                        <img src={pic3} alt="pic1" />
                </div>

                <div className="video-picture-new">
                        <img src={pic4} alt="pic2" />
                </div>
            </div>

            <div className="videovideo-content">

                <div className="videovideo-new">
                    <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/evpkttwXm9w"
                        title="YouTube video player"
                        frameborder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default CardVideoVideo