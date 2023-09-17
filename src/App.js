import './App.css';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import TimeStampItem from './pages/Timestamp/TimestampItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/history" element={<TimeStampItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
