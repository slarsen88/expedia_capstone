import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import UploadPhoto from './components/UploadPhoto/UploadPhoto'
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={UploadPhoto} />

      </Router>
    </div>
  );
}

export default App;