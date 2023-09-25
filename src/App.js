import './App.css';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Timestamp from './pages/Timestamp/Timestamp';
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/history" element={<Timestamp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
