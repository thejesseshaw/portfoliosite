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
                <li><i class="fas fa-envelope-open" alt="Email me!"></i></li>
                <li><i class="fab fa-github-square"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-twitter-square"></i></li>
                <li><i class="fab fa-linkedin"></i></li>
                <li><i class="fas fa-phone"></i></li>
            </ul>
            </section>
        </footer>
    );
}

