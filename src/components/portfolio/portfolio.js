import React from 'react';
import './portfolio.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid'

export default function Portfolio(props) {
    console.log(props.site)
    return (
        <section className={`portfolio ${props.projectname}`}>
            <section className="portfolio-section">
                <h1>{props.projectname}</h1>
                <section>
                <img src={props.logo} alt="logo" className="project-logo"></img>
                </section>
                <section>
                <span className="site-identifier">{props.description}</span>
                </section>
                <section className="technolgy">
                    {props.technologies}
                    <FontAwesomeIcon icon={faCheckSquare} />
                </section>
            </section>
        </section>
    );
}

