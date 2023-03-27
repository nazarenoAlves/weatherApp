import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFoud';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/NotFound" element={<NotFound />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
