import React from 'react';
import './footer.css'

/*Font Awesome */
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function Footer(props) {
    return (
        <footer className="footer">
            <h3>Say Hi</h3>
            <section className="footer-nav">
            <ul>
                <li>Email</li>
                <li>GitHub</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Phone</li>
            </ul>
            </section>
        </footer>
    );
}

