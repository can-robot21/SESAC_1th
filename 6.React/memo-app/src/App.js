import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './MemoApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        function App() {

          <Router>
            <div>
              <nav className='menu'>
                <ul className='menu'>
                  <li className='menu'><Link to="/">Home</Link></li>
                  <li className='menu'><Link to="/memo">Memo</Link></li>
                </ul>
              </nav>
            </div>
            <hr />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/memo" element={<MemoApp />} />
            </Routes>
          </Router>
        }
      </header>
    </div>
  );
}

export default App;
