//import React from 'react';
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Workspace from './Workspace';
import Form from './Form';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div id="navigation">
          <Link to="/"></Link>
          <Link to="/contact"></Link>
          <Link to="/about"></Link>
          <Link to="/workspace"></Link>
          <Link to="/form"></Link>
        </div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/workspace" element={<Workspace />}/>
            <Route path="/form" element={<Form />}/>
          </Routes>
        </div>
    </Router>
  )
}

export default App;
