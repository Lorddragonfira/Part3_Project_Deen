import Navbar from "../components/navbar"
import CardVideoVideo from "../components/CardVideoVideo"
import CardWritingWriting from "../components/CardWritingWriting"

function WrittenPage() {
    return (
      <div className='page-nav'>
         <Navbar/>
          <div className='content'>
          <CardWritingWriting/>
          </div>
      </div>
    )
  }

  export default WrittenPage