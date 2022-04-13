import Navbar from "../components/navbar"
import HeroAboutUs from "../components/HeroAboutUs"
import CardAboutUs from "../components/CardContactUs"

function ContactUsPage() {
    return (
      <div className='page-nav'>
         <Navbar/>
          <div className='content'>
          <HeroAboutUs/>
          <CardAboutUs/>
          </div>
      </div>
    )
  }

  export default ContactUsPage