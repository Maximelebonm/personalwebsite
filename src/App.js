import logo from './logo.svg';
import './App.css';
import TechnoScreen from './screens/TechnoScreen';
import ContactScreen from './screens/ContactScreen';
import BaseScreen from './screens/BaseScreen';
import HomeScreen from './screens/homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExperienceScreen from './screens/ExperienceScreen';

function App() {
  return (
    <div className="ContentPage">
      <BrowserRouter>
        <Routes>
            
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="/techno" element={<TechnoScreen/>}/>
            <Route path="/contact" element={<ContactScreen/>}/>
            <Route path="/experience" element={<ExperienceScreen/>}/>
          </Route>

        </Routes>      
      </BrowserRouter>

    </div>
  );
}

export default App;
