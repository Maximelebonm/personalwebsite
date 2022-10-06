import logo from './logo.svg';
import './App.css';
import TechnoScreen from './screens/TechnoScreen';
import ContactScreen from './screens/ContactScreen';
import BaseScreen from './screens/BaseScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExperienceScreen from './screens/ExperienceScreen';

function App() {
  return (
    <div className='bg-slate-900'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseScreen />}>
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
