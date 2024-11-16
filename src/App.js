import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PopularProjects from './components/PopularProjects';
import ProjectList from './components/ProjectList';
import SubmitProject from './components/SubmitProject';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularProjects />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/submit" element={<SubmitProject />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
