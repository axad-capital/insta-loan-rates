import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp/HomeComp';
import PrivacyPolicy from './components/Footer/Legal/PrivacyPolicy';
import Terms from './components/Footer/Legal/Terms';
import Disclaimer from './components/Footer/Legal/Disclaimer';
import Partners from './components/Footer/Legal/Partners';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeComp />} />
          <Route exact path='/goog' element={<HomeComp />} />
          <Route exact path='/fb' element={<HomeComp />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
