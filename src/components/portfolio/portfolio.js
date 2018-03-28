import React from 'react';
import './portfolio.css'


var stegatoTech = <section className="techfonts"><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i><i class="fab fa-node"></i><i class="fab fa-react"></i></section>
var squaresTech = <section className="techfonts"><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i><i class="fab fa-node"></i></section>
var mumuTech = <section className="techfonts"><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i></section>

export default function Portfolio(props) {
    let technologies
    console.log(props)
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
                <section className="screenshot">
                <img src={props.screenshot} alt="screenshot" className="project-screenshot"></img>
                </section>
                <section className="logo-section">
                <img src={props.logo} alt="logo" className="project-logo"></img>
                </section>
                <section>
                <span className="site-identifier">{props.description}</span>
                </section>
                <section className="technologies">
                    {technologies}
                </section>
                <section>
                    <span className="linkout github"><a href={props.repolink} target="_blank">Repo</a></span>
                    <span className="linkout demo"><a href={props.applink} target="_blank">Demo</a></span>
                </section>
            </section>
        </section>
    );
}

