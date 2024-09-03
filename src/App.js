import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import Vehicles from './Components/Vehicles/Vehicles';
import Parts from './Components/Parts/Parts';
import Careers from './Components/Careers/Careers';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';

function App() {
  return (
      <Router>
      <div>
        <Header/>
        <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Blog/>} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="vehicles" element={<Vehicles/>}/>
          <Route path="/parts" element={<Parts/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="contact" element={<Contact/>}/> 
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
