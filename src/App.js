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


export default function App(props) {
    return (
        <main>
            <Heading />
            <Landing />
            <Whoiam />
            <Portfolio site="1" logo={stegatoLogo} projectname="stegato"/>
            <Portfolio site="2" logo={squaresLogo} projectname="squares"/>
            <Portfolio site="3" logo={mumuLogo} projectname="mumu"/>
            <Footer />
        </main>
    );
}

