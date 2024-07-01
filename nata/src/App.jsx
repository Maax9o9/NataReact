import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/layout/header/MenuBar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Discografia from './pages/Discografia';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <MenuBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/discografia" element={<Discografia />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
