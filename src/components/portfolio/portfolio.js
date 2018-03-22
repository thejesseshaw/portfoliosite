import React from 'react';
import './portfolio.css'

/*Font Awesome */
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

var stegatoTech = <section><FontAwesomeIcon icon={["fab","html5"]}/><FontAwesomeIcon icon={["fab","css3-alt"]}/><FontAwesomeIcon icon={["fab","js-square"]}/><FontAwesomeIcon icon={["fab","react"]}/><FontAwesomeIcon icon={["fab","node-js"]}/></section>
var squaresTech = <section><FontAwesomeIcon icon={["fab","html5"]}/><FontAwesomeIcon icon={["fab","css3-alt"]}/><FontAwesomeIcon icon={["fab","js-square"]}/><FontAwesomeIcon icon={["fab","react"]}/><FontAwesomeIcon icon={["fab","node-js"]}/></section>
var mumuTech = <section><FontAwesomeIcon icon={["fab","html5"]}/><FontAwesomeIcon icon={["fab","css3-alt"]}/><FontAwesomeIcon icon={["fab","js-square"]}/><FontAwesomeIcon icon={["fab","react"]}/><FontAwesomeIcon icon={["fab","node-js"]}/></section>

export default function Portfolio(props) {
    let technologies
    console.log(props.technologies)
    if (props.projectname === "stegato") {
        technologies = stegatoTech
    }
    else if (props.projectname === "mumu") {
        technologies = mumuTech
    }
    else if (props.projectname === "squares") {
        technologies = squaresTech
    }
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
                {technologies}
            </section>
        </section>
    );
}

