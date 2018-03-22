import React from 'react';
import './footer.css'

/*Font Awesome */
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function Footer(props) {
    return (
        <footer>
            <h3>Say Hi</h3>
            <ul>
                <li><FontAwesomeIcon icon={["fab","linkedin-in"]}/></li>
                <li>Email</li>
                <li>GitHub</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Phone</li>
            </ul>
        </footer>
    );
}

