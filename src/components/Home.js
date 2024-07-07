import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1 className="fadeIn">Welcome to GameZone!</h1>
                <p className="fadeIn delay">Your place for fun and learning.</p>
                <Link to="/games" className="fadeIn delay">
                    <button className="button">Start Playing!</button>
                </Link>
            </section>
            <section className="benefits fadeIn delay">
                <h2>Benefits of Gaming</h2>
                <ul>
                    <li><strong>Cognitive Skills:</strong> Enhance problem-solving, memory, and spatial navigation.</li>
                    <li><strong>Stress Relief:</strong> A great way to relax and unwind after a long day.</li>
                    <li><strong>Social Interaction:</strong> Connect with friends and meet new people through multiplayer games.</li>
                    <li><strong>Hand-Eye Coordination:</strong> Improve reaction times and coordination.</li>
                    <li><strong>Learning Opportunities:</strong> Educational games can teach subjects like math, science, and history.</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
