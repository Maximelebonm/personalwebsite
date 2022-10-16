import logo from './logo.svg';
import './App.css';
import TechnoScreen from './screens/TechnoScreen';
import ContactScreen from './screens/ContactScreen';
import BaseScreen from './screens/BaseScreen';
import HomeScreen from './screens/homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExperienceScreen from './screens/ExperienceScreen';
import LoisirScreen from './screens/loisirScreen';

const App = () => {
 
  return (
    <div>
      <div className="ContentPage pt-4 h-screen w-screen">
    </div>

      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="/techno" element={<TechnoScreen/>}/>
            <Route path="/experience" element={<ExperienceScreen/>}/>
            <Route path="/loisir" element={<LoisirScreen/>}/>
            <Route path="/contact" element={<ContactScreen/>}/>
          </Route>
          <Route path="*" element={<ContactScreen />} />
        </Routes>      
      </BrowserRouter>
    </div>

  );
}

export default App;
