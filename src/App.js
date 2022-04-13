
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideosPage from './pages/VideosPage';
import MusicPage from './pages/MusicPage';
import WrittenPage from './pages/WrittenPage';
import ContactUsPage from './pages/ContactUsPage';
import Showreel from '../src/pages/Showreel';
import LandingPage from '../src/pages/LandingPage';



function App() {

  return (
  
      <div className="App">
        
        <BrowserRouter>
      <Routes>

      <Route index element={<LandingPage />} />
   
          
          <Route path="/showreel" element={<Showreel />} />
          <Route path="video" element={<VideosPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="written" element={<WrittenPage />} />
          <Route path="contact" element={<ContactUsPage />} />
        
      </Routes>
    </BrowserRouter>
      
      </div>
      
      

  );
}

export default App;
