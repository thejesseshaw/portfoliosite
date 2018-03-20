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

/*Font Awesome */
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'



export default function App(props) {
    return (
        <main>
            <Heading />
            <Landing />
            <Whoiam />
            <section className="test-icons">
                <FontAwesomeIcon icon={["fab","html5"]}/>
                <FontAwesomeIcon icon={["fab","css3-alt"]}/>
                <FontAwesomeIcon icon={["fab","js-square"]}/>
                <FontAwesomeIcon icon={["fab","react"]}/>
                <FontAwesomeIcon icon={["fab","node-js"]}/>
            </section>
            <section className="projects">
                <Portfolio site="1" logo={stegatoLogo} projectname="stegato" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus arcu, ac accumsan felis egestas vel. Vivamus massa ante, feugiat quis maximus vitae, venenatis quis erat. Sed consectetur magna non mi euismod euismod vitae sed massa. Maecenas est ante, blandit sit amet eros ut, rhoncus egestas neque. Mauris elementum maximus lectus id egestas. Integer finibus accumsan lobortis. Pellentesque sollicitudin libero ligula, nec convallis nibh pulvinar non. Aliquam eget convallis dui. Sed id magna a lacus iaculis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas luctus sapien vitae molestie interdum. Aenean ut vulputate massa, at pulvinar sem." technologies="html" applink="https://stegato.netlify.com/" repolink=""/>
                <Portfolio site="2" logo={squaresLogo} projectname="squares" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus arcu, ac accumsan felis egestas vel. Vivamus massa ante, feugiat quis maximus vitae, venenatis quis erat. Sed consectetur magna non mi euismod euismod vitae sed massa. Maecenas est ante, blandit sit amet eros ut, rhoncus egestas neque. Mauris elementum maximus lectus id egestas. Integer finibus accumsan lobortis. Pellentesque sollicitudin libero ligula, nec convallis nibh pulvinar non. Aliquam eget convallis dui. Sed id magna a lacus iaculis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas luctus sapien vitae molestie interdum. Aenean ut vulputate massa, at pulvinar sem." technologies="icons go here" applink="https://squaresapp.herokuapp.com/" repolink=""/>
                <Portfolio site="3" logo={mumuLogo} projectname="mumu" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum risus arcu, ac accumsan felis egestas vel. Vivamus massa ante, feugiat quis maximus vitae, venenatis quis erat. Sed consectetur magna non mi euismod euismod vitae sed massa. Maecenas est ante, blandit sit amet eros ut, rhoncus egestas neque. Mauris elementum maximus lectus id egestas. Integer finibus accumsan lobortis. Pellentesque sollicitudin libero ligula, nec convallis nibh pulvinar non. Aliquam eget convallis dui. Sed id magna a lacus iaculis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas luctus sapien vitae molestie interdum. Aenean ut vulputate massa, at pulvinar sem." technologies="icons go here" applink="https://thejesseshaw.github.io/mumu/" repolink=""/>
            </section>
            <Footer />
        </main>
    );
}

