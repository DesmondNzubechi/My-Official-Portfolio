import React from "react";
import nzubechukwu from './nzubechukwu.png';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="description">
                <h1>About Me</h1>
            
                <p>My name is <strong>Desmond Nzubechukuw Abugu</strong> A passionate 
                   self-taught web developer and a very ambitious
                 web developer who is open to accepting roles in established
                 companies with the opportunity to work with tech skills.</p>
                 <p><strong>Specialties:</strong> Developing and designing attractive, interactive and
                     wholesome website for companies and businesses that desire to be 
                     at the top.</p>
                     <a href="https://wa.me/2347084183611?text=Hello%20Nzubechukwu,%20I%20got%20your%20contact%20from%20your%20website%20my%20name%20is%20..." className="contactLink" > Contact Me </a>
            </div>
            <div className="img">
                <img src={nzubechukwu} alt="Nzubechukwu" />
            </div>
        </div>
    );
};

export default About;