import React from 'react';
import './portfolio.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


export default function Portfolio(props) {
    console.log(props.site)
    return (
        <section className={`portfolio ${props.projectname}`}>
            <section className="portfolio-section">
                <h1>{props.projectname}</h1>
                <section>
                <img src={props.logo} alt="logo" className="project-logo"></img>
                </section>
                <span className="site-identifier">{props.description}</span>
                <section className="technolgy">
                    {props.technologies}
                </section>
            </section>
        </section>
    );
}

