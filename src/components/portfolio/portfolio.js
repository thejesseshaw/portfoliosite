import React from 'react';
import './portfolio.css'


export default function Portfolio(props) {
    console.log(props.site)
    return (
        <section className={`portfolio ${props.projectname}`}>
            <section className="portfolio-section">
                <span className="site-identifier">This is portfolio site number {props.site}</span>
                <img src={props.logo} alt="logo" className="project-logo"></img>
            </section>
        </section>
    );
}

