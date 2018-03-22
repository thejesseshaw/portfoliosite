import React from 'react';
import './heading.css'


export default function Heading(props) {
    return (
        <header>
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
            <div className="name navbar-brand"><a id="slide" target="_blank" href="https://github.com/dubrawr" rel="noopener noreferrer">Jesse Shaw</a></div></div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="links">
            <li><a className="jumper" href="#bio" rel="noopener noreferrer">Bio</a></li>
            <li><a className="jumper" href="#portfolio" rel="noopener noreferrer">Portfolio</a></li>
            <li><a target="_blank" href="https://github.com/thejesseshaw" rel="noopener noreferrer">Github</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/thejesseshaw/" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            </div>
        </div>
        </header>
    );
}

