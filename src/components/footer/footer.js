import React from 'react';
import './footer.css'

/*Font Awesome */
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function Footer(props) {
    return (
        <footer className="footer">
            <h3 className="say-hi">Say Hi</h3>
            <section className="footer-nav">
            <ul>
                <li><a href="mailto:jdshaw1987@gmail.com" target="_blank"><i class="fas fa-envelope-open" alt="Email me!"></i></a></li>
                <li><a href="https://github.com/thejesseshaw" target="_blank"><i class="fab fa-github-square"></i></a></li>
                <li><a href="http://instagram.com/itsjesseshaw" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/itsJesseShaw" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
                <li><a href="https://www.linkedin.com/in/thejesseshaw/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><i class="fas fa-phone"></i></li>
            </ul>
            </section>
        </footer>
    );
}

