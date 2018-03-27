import React from 'react';
import Heading from './components/heading/heading'
import Landing from './components/landing/landing'
import Whoiam from './components/whoiam/whoiam'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'
import './app.css'

/* Portfolio Items*/
import squaresLogo from './images/Logo3.jpg'
import mumuLogo from './images/logo.png'
import stegatoLogo from './images/stegatto_logo2.png'

/*Portfolio Screenshots */

import squaresScreenshot from './images/squares_screenshot.jpg';
import stegatoScreenshot from './images/stegato_screenshot.jpg';
import mumuScreenshot from './images/mumu_screenshot.jpg'

export default function App(props) {
    return (
        <main>
            <Heading />
            <Landing />
            <Whoiam />
            <section className="projects" id="portfolio">
                <section className="portfolio-header">
                    <h2 className="portfolio-header-text">Portfolio</h2>
                </section>
                <Portfolio site="1" screenshot={stegatoScreenshot} logo={stegatoLogo} projectname="stegato" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus arcu, ac accumsan felis egestas vel. Vivamus massa ante, feugiat quis maximus vitae, venenatis quis erat. Sed consectetur magna non mi euismod euismod vitae sed massa. Maecenas est ante, blandit sit amet eros ut, rhoncus egestas neque. Mauris elementum maximus lectus id egestas. Integer finibus accumsan lobortis. Pellentesque sollicitudin libero ligula, nec convallis nibh pulvinar non. Aliquam eget convallis dui. Sed id magna a lacus iaculis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas luctus sapien vitae molestie interdum. Aenean ut vulputate massa, at pulvinar sem." technologies="html" applink="https://stegato.netlify.com/" repolink="https://github.com/thejesseshaw/stegato"/>
                <Portfolio site="2" screenshot={squaresScreenshot} logo={squaresLogo} projectname="squares" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus arcu, ac accumsan felis egestas vel. Vivamus massa ante, feugiat quis maximus vitae, venenatis quis erat. Sed consectetur magna non mi euismod euismod vitae sed massa. Maecenas est ante, blandit sit amet eros ut, rhoncus egestas neque. Mauris elementum maximus lectus id egestas. Integer finibus accumsan lobortis. Pellentesque sollicitudin libero ligula, nec convallis nibh pulvinar non. Aliquam eget convallis dui. Sed id magna a lacus iaculis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas luctus sapien vitae molestie interdum. Aenean ut vulputate massa, at pulvinar sem." technologies="icons go here" applink="https://squaresapp.herokuapp.com/" repolink="https://github.com/thejesseshaw/squares"/>
                <Portfolio site="3" screenshot={mumuScreenshot} logo={mumuLogo} projectname="mumu" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus arcu, ac accumsan felis egestas vel. Vivamus massa ante, feugiat quis maximus vitae, venenatis quis erat. Sed consectetur magna non mi euismod euismod vitae sed massa. Maecenas est ante, blandit sit amet eros ut, rhoncus egestas neque. Mauris elementum maximus lectus id egestas. Integer finibus accumsan lobortis. Pellentesque sollicitudin libero ligula, nec convallis nibh pulvinar non. Aliquam eget convallis dui. Sed id magna a lacus iaculis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas luctus sapien vitae molestie interdum. Aenean ut vulputate massa, at pulvinar sem." technologies="icons go here" applink="https://thejesseshaw.github.io/mumu/" repolink="https://github.com/thejesseshaw/mumu"/>
            </section>
            <Footer />
        </main>
    );
}

