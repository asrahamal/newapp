import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const apiKey = "3b7bffdcf17b41049257914ab9be9900"
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="health" element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />
        </Routes >
      </Router>
    </div>
  )

}

export default App;