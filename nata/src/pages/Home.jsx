
import React from 'react';
import './Home.css';
import mainImage from '../assets/images/image.png';
import fechasImage from '../assets/images/FECHAS.jpg';
import escucharImage from '../assets/images/spotify.jpg';
import instagramImage from '../assets/images/INSTA.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <img src={mainImage} alt="Nata" className="main-image" />
            <h1>Natanael Cano</h1>
            <div className="buttons-container">
                <div className="button-item">
                    <img src={fechasImage} alt="Fechas" />
                    <a href="https://www.bing.com/ck/a?!&&p=488921713bab8b39JmltdHM9MTcxOTc5MjAwMCZpZ3VpZD0wNTc3MjBkYi04ZjMzLTZjMDgtMWE1ZS0zM2QzOGU4ZDZkZDgmaW5zaWQ9NTIwMQ&ptn=3&ver=2&hsh=3&fclid=057720db-8f33-6c08-1a5e-33d38e8d6dd8&psq=nata+tour&u=a1aHR0cHM6Ly93d3cudGlja2V0bWFzdGVyLmNvbS5teC9uYXRhbmFlbC1jYW5vLWJvbGV0b3MvYXJ0aXN0LzI3OTc3NDU&ntb=1">
                        <button className="btn">Fechas</button>
                    </a>
                </div>
                <div className="button-item">
                    <img src={escucharImage} alt="Escuchar" />
                    <a href="https://open.spotify.com/intl-es/artist/0elWFr7TW8piilVRYJUe4P?si=dGsDMms5QYe2zlh1aORzQA">
                        <button className="btn">Escuchar</button>
                    </a>
                </div>
                <div className="button-item">
                    <img src={instagramImage} alt="Instagram" />
                    <a href="https://www.bing.com/ck/a?!&&p=be06d06bae49e7edJmltdHM9MTcxOTc5MjAwMCZpZ3VpZD0wNTc3MjBkYi04ZjMzLTZjMDgtMWE1ZS0zM2QzOGU4ZDZkZDgmaW5zaWQ9NTE5OA&ptn=3&ver=2&hsh=3&fclid=057720db-8f33-6c08-1a5e-33d38e8d6dd8&psq=nata+instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9uYXRhbmFlbF9jYW5vLw&ntb=1">
                        <button className="btn">Instagram</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
