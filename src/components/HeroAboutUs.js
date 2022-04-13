import React from 'react'
import pic1 from '../images/Profile.jpg'

function HeroAboutUs() {
  return (
    <div className='contact-wrapper'>

        <div className="contact-picture-container">
                <div className="contact-new">
                
                <img src={pic1} alt="pic1" />
            </div>
            </div>

            <div className="contact-text-container">
                <p>Deen Wimbrow is an NZ born artist based out of Auckland. He also has a doddle blog he never updates</p>
                <br></br><br></br>
                <p>For hob inquiries, please look below
                    Otherwise reach me at.....
                    <a href='/'>deen.wimbrow@gmail.com</a></p>
            </div>
                
          
                
        </div>

 
    )
}

export default HeroAboutUs