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
                <span className="aboutme-description">My name is Jesse Shaw. I am a web developer and recent graduate of the Front End Web Development Career Path program at Thinkful. I enjoy coding because I love to create things. I enjoy building things from scratch and seeing them come to life. I am interested in joining a team of developers and creatives who have similar mindsets. I am also eager to work with a team of people who are not afraid to challenge each other and make the world a better place.</span>
                <span className="aboutme-description">When I'm not coding, I can usually be found working on some music in Logic Pro X, creating digital art in Photoshop, or at the gym. I consider myself to be a lifelong learner and I have set a personal goal for 2018 to read 40 books by the end of the year.</span>
            </section>
        </section>
    );
}

