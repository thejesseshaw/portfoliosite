import React from 'react';
import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSalesforce, faHtml5, faCss3, faJs, faBitbucket, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';


var stegatoTech = <section className="techfonts"><i className="fab fa-html5" title="HTML"></i><i className="fab fa-css3-alt" title="CSS"></i><i className="fab fa-js-square" title="Javascript"></i><i className="fab fa-node" title="Node JS"></i><i className="fab fa-react" title="React JS"></i></section>
var squaresTech = <section className="techfonts"><i className="fab fa-html5" title="HTML"></i><i className="fab fa-css3-alt" title="CSS"></i><i className="fab fa-js-square" title="Javascript"></i><i className="fab fa-node" title="Node JS"></i></section>
var mumuTech = <section className="techfonts"><i className="fab fa-html5" title="HTML"></i><i className="fab fa-css3-alt" title="CSS"></i><i className="fab fa-js-square" title="Javascript"></i></section>
var smuTech = <section className="techfonts">
    <FontAwesomeIcon icon={faSalesforce} />
    <FontAwesomeIcon icon={faHtml5} />
    <FontAwesomeIcon icon={faCss3} />
    <FontAwesomeIcon icon={faJs} />
    <FontAwesomeIcon icon={faBitbucket} />
    </section>
var yogaDebTech = 
<section className="techfonts">
    <FontAwesomeIcon icon={faHtml5} />
    <FontAwesomeIcon icon={faCss3} />
    <FontAwesomeIcon icon={faJs} />
    <FontAwesomeIcon icon={faWordpress} />
    <FontAwesomeIcon icon={faPhp} />
</section>

export default function Portfolio(props) {
    let technologies
    if (props.projectname === "stegato") {
        technologies = stegatoTech
    }
    else if (props.projectname === "mumu") {
        technologies = mumuTech
    }
    else if (props.projectname === "squares") {
        technologies = squaresTech
    }
    else if (props.projectname === "south-moon-under") {
        technologies = smuTech
    }
    else if (props.projectname === "yoga-by-deborah") {
        technologies = yogaDebTech
    }
    return (
        <section className={`portfolio ${props.projectname}`}>
            <section className="portfolio-section">
                <h2>{props.projectname}</h2>
                <section className="screenshot">
                <img src={props.screenshot} alt="screenshot" className="project-screenshot"></img>
                </section>
                <section className="logo-section">
                <script>console.log({props.logo});</script>
                <img src={props.logo} alt="logo" className="project-logo"></img>
                </section>
                <section className="project-description">
                <span className="site-identifier">{props.description}</span>
                </section>
                <section className="technologies">
                    {technologies}
                </section>
                <section className="the-links">
                    <span className="linkout github"><a href={props.repolink} target="_blank">Repo</a></span>
                    <span className="linkout demo"><a href={props.applink} target="_blank">Demo</a></span>
                </section>
            </section>
        </section>
    );
}

