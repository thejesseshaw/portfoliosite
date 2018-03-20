import React from 'react';
import './landing.css'
import splashImage from '../../images/helloquence-61189-unsplash.jpg'


export default function Landing(props) {
    return (
        <section className="landing">
            <section className="hero-image">
                <img src={splashImage} alt="splashImage" className="splashImage"></img>
            </section>
            <section className="greeting-section">
                <span className="greeting">"Hi. I'm Jesse. I'm a fullstack developer"</span>
            </section>
        </section>
    );
}

