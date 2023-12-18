import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav className='menu'>
          <ul className='menu'>
            <li className='menu'><Link to="/">Home</Link></li>
            <li className='menu'><Link to="/about">About</Link></li>
            <li className='menu'><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <hr />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
