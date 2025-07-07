import './App.css';
import Header from './Components/Header';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from './Pages/Home';
import Project from './Pages/Projects';
import Skill from './Pages/Skills';

function App() {
  return (
    <div >
    <Header/>
      <Routes>

        <Route path="/" element={<Home />}  />
        <Route path="/projects" element={<Project />}  />
        <Route path="/skills" element={<Skill />}  />

      </Routes>
    </div>
  );
}

export default App;
