import React from 'react';
import './footer.css'

/*Font Awesome */
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function Footer(props) {
    return (
        <footer className="footer" id="footer">
            <h3 className="say-hi">Say Hi</h3>
            <hr className="light"></hr>
            <section className="footer-nav">
            <ul>
                <li><a href="mailto:jdshaw1987@gmail.com" target="_blank" rel="noopener noreferrer" title="Send me an email at jdshaw1987@gmail.com"><i className="fas fa-envelope-open" alt="Email me!"></i></a></li>
                <li><a href="https://github.com/thejesseshaw" target="_blank" rel="noopener noreferrer" title="Connect with me on GitHub"><i className="fab fa-github-square"></i></a></li>
                <li><a href="https://www.instagram.com/jesseshawcodes/" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/JesseShawCodes" target="_blank" rel="noopener noreferrer" title="Say Hi on Twitter!"><i className="fab fa-twitter-square"></i></a></li>
                <li><a href="https://www.linkedin.com/in/thejesseshaw/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="tel:410-703-6125" title="Send me a message at 410-703-6125"><i className="fas fa-phone"></i></a></li>
            </ul>
            </section>
        </footer>
    );
}

