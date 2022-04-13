import Logo from '../images/Logo2.png'
import {FaBars, FaInstagram, FaSpotify, FaTumblr, FaFacebookF, FaYoutube, FaTimes} from 'react-icons/fa'
import {  Link } from "react-router-dom";
import { useState } from 'react';


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return ( 
        <nav className="navbar">
            <div className="logo">
            <Link to="/showreel"><img src={Logo} alt="logo" /></Link> 

            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item"><Link to="/showreel">featured works</Link></li>
                <li className="nav-item"><Link to="/video">videos</Link></li>
                <li className="nav-item"><Link to="/music">music</Link></li>
                <li className="nav-item"><Link to="/written">writing</Link></li>
                <li className="nav-item"><Link to="/contact">contact us/about us</Link></li>
            </ul>
            <ul className={click ? 'social-media-menu active' : 'social-media-menu'}>
                <li className="nav-item"><a href="https://www.instagram.com/deen_wimbrow/"><FaInstagram></FaInstagram></a></li>
                <li className="nav-item"><a href="https://open.spotify.com/artist/6f9trHMNtnnuFfJJD7Ksq0"><FaSpotify></FaSpotify></a></li>
                <li className="nav-item"><a href="https://www.tumblr.com/blog/deenwimbrow"><FaTumblr></FaTumblr></a></li>
                <li className="nav-item"><a href="https://www.facebook.com/baykkid/"><FaFacebookF></FaFacebookF></a></li>
                <li className="nav-item"><a href="https://www.youtube.com/user/Deeno620"><FaYoutube></FaYoutube></a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}> 
                {click ? (<FaTimes/>) : (<FaBars></FaBars>)}
         
            </div>
        </nav>    
     );
}
 
export default Navbar;