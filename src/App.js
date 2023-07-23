import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* Navbar */}
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/generalhealth">General Health</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
          </nav> */}

          {/* Routes */}
          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={10} country="in" category="general" />} />
            <Route exact path="/business" element={<News  key="business" pagesize={10} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={10} country="in" category="entertainment" />} />
            <Route exact path="/generalhealth" element={<News key="generalhealth" pagesize={10} country="in" category="generalhealth" />} />
            <Route exact path="/science" element={<News key="science" pagesize={10} country="in" category="science" />} />
            <Route  exact path="/sports" element={<News key="sports" pagesize={10} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pagesize={10} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
