import React from 'react';
import './heading.css'


export default function Heading(props) {
    return (
        <header>
        <div className="container">
            <section>
                <h1>Jesse Shaw</h1>
            </section>
            <ul className="links">
            <li><a className="jumper" href="#bio" rel="noopener noreferrer">Bio</a></li>
            <li><a className="jumper" href="#portfolio" rel="noopener noreferrer">Portfolio</a></li>
            <li><a className="jumper" target="_blank" href="https://github.com/thejesseshaw" rel="noopener noreferrer">Github</a></li>
            <li><a className="jumper" target="_blank" href="https://www.linkedin.com/in/thejesseshaw/" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </div>
        </header>
    );
}

