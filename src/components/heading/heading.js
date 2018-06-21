import React from 'react';
import './heading.css'


export default function Heading(props) {
    return (
        <header>
        <div className="container">
            <section className="name">
                <a href="/" className="name-text-link"><h1 className="name-text" >Jesse Shaw</h1></a>
            </section>
            <nav>
            <ul className="links">
                <li><a className="jumper" href="#portfolio" rel="noopener noreferrer">Portfolio</a></li>
                <li><a className="jumper" href="#footer" rel="noopener noreferrer">Say Hi</a></li>
                <li><a className="jumper" target="_blank" href="https://github.com/JesseShawCodes" rel="noopener noreferrer">Github</a></li>
                <li><a className="jumper" target="_blank" href="https://www.linkedin.com/in/thejesseshaw/" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            </nav>
        </div>
        </header>
    );
}

