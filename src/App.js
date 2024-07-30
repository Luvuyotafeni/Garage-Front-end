import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import Vehicles from './Components/Vehicles/Vehicles';
import Parts from './Components/Parts/Parts';
import Careers from './Components/Careers/Careers';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
