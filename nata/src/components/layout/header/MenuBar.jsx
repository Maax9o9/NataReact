import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <nav>
                <Link to="/home" className="menu-link">Inicio</Link>
                <Link to="/discografia" className="menu-link">Discografía</Link>
                <Link to="/login" className="menu-link">Iniciar Sesión</Link>
            </nav>
        </div>
    );
};

export default MenuBar;
