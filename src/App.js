import logo from './logo.svg';
import './App.css';
import './CSS/loisir.css';
import './CSS/techno.css';
import './CSS/experience.css';
import './CSS/contact.css';
import TechnoScreen from './screens/TechnoScreen';
import ContactScreen from './screens/ContactScreen';
import BaseScreen from './screens/BaseScreen';
import HomeScreen from './screens/homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExperienceScreen from './screens/ExperienceScreen';
import LoisirScreen from './screens/loisirScreen';
import PresentationScreen from './screens/PresentationScreen';
import DetailBeMusicianScreen from './screens/DetailBemusicianScreen';
import DetailDouCrochetScreen from './screens/DetailDoucrochet';
import DetailAlloMovie from './screens/DetailAlloMovie';
import ScrollToTop from './screens/scrollToTop';

const App = () => {
 
  return (
    <div>
      <div className="ContentPage pt-4 h-screen w-screen">
    </div>

      <BrowserRouter>
      <ScrollToTop/>
        <Routes>        
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="/techno" element={<TechnoScreen/>}/>
            <Route path="/experience" element={<ExperienceScreen/>}/>
            <Route path="/projet" element={<LoisirScreen/>}/>
            <Route path="/projet/bemusician" element={<DetailBeMusicianScreen/>}/>
            <Route path="/projet/doucrochet" element={<DetailDouCrochetScreen/>}/>
            <Route path="/projet/allomovie" element={<DetailAlloMovie/>}/>
            <Route path="/contact" element={<ContactScreen/>}/>
          </Route>
          <Route path="*" element={<ContactScreen />} />
        </Routes>      
      </BrowserRouter>
    </div>

  );
}

export default App;
