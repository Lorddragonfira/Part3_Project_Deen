import React from 'react'
import KingsLand from "../images/KingsLand.mp4"
import { FaInstagram, FaSpotify, FaTumblr, FaFacebookF, FaYoutube} from 'react-icons/fa'
import {  Link } from "react-router-dom";

function Landing() {
  return (
    <div className='background-video'>
        <video
        autoPlay
        loop
        muted
        >
          
          <source src={KingsLand} type="video/mp4" />
        </video>

        <div className="landing-title">
          <div className="heading-deen">
          <h1>Deen Wimbrow</h1>
          </div>
          <div className="heading-enter">
        <Link to="/showreel"><h1>Enter Site</h1></Link>
        </div>
            <ul className='social-media-menu'>
                <li className="nav-item"><a href="https://www.instagram.com/deen_wimbrow/"><FaInstagram></FaInstagram></a></li>
                <li className="nav-item"><a href="https://open.spotify.com/artist/6f9trHMNtnnuFfJJD7Ksq0"><FaSpotify></FaSpotify></a></li>
                <li className="nav-item"><a href="https://www.tumblr.com/blog/deenwimbrow"><FaTumblr></FaTumblr></a></li>
                <li className="nav-item"><a href="https://www.facebook.com/baykkid/"><FaFacebookF></FaFacebookF></a></li>
                <li className="nav-item"><a href="https://www.youtube.com/user/Deeno620"><FaYoutube></FaYoutube></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Landing