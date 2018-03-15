import React from 'react';
import Heading from './components/heading/heading'
import Whoiam from './components/whoiam/whoiam'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'
import './app.css'


export default function App(props) {
    return (
        <main>
            <Heading />
            <Whoiam />
            <Portfolio />
            <Footer />
        </main>
    );
}

