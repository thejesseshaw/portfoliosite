import React from 'react';
import './portfolio.css'

/*Font Awesome */
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

var htmlIcon = <FontAwesomeIcon icon={["fab","html5"]}/><FontAwesomeIcon icon={["fab","css3-alt"]}/><FontAwesomeIcon icon={["fab","js-square"]}/>
var cssIcon = <FontAwesomeIcon icon={["fab","css3-alt"]}/>
var jsIcon = <FontAwesomeIcon icon={["fab","js-square"]}/>
var reactIcon = <FontAwesomeIcon icon={["fab","react"]}/>
var nodeIcon = <FontAwesomeIcon icon={["fab","node-js"]}/>

export default function Portfolio(props) {
    let technologies
    console.log(props.technologies)
    if (props.projectname == "mumu") {
        technologies = htmlIcon
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
                <section className="technolgy">
                    {technologies}
                </section>
            </section>
        </section>
    );
}

