import React from 'react';
import './whoiam.css'
import myPicture from '../../images/Shaw-6014_crop.jpg'


export default function Whoiam(props) {
    return (
        <section className="about-me" id="bio">
            <section className="image">
                <img src={myPicture} alt="My Bitmoji" className="my-picture"></img>
            </section>
            <section className="description">
                <span className="aboutme-description">My name is Jesse Shaw. I am a professional Web Developer currently working in the DC Metropolitan area. I enjoy coding because I love to create things. I enjoy building things from scratch and seeing them come to life. I am always interested in meeting and learning from fellow developers and creatives who have similar mindsets. I love working with people who are not afraid to challenge each other and make the world a better place.</span>
                <span className="aboutme-description">When I'm not coding, I can usually be found working on some music in Logic Pro X, creating digital art in Photoshop, or at the gym. I consider myself to be a lifelong learner and I have set a personal goal for 2020 to read 30 books by the end of the year.</span>
            </section>
        </section>
    );
}

