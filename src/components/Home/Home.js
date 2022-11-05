import React from "react";
import './Home.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import coding from './coding.jpg';

const Home = () => {
    return (
<div className="homy">
    <div className='intro'>
    <p className="hi">Hi There,</p>
    <p className="im">I Am</p>
    <h1 className="myName">Desmond Nzubechukwu</h1>
    <p className="dev">A Frontend Web Developer</p>
    </div>
    <div className="contacts">
        <button className="contactMe">Contact Me</button>
        <button className="readMore">Read More</button>
    </div>
    <div className="socs">
        <AiFillLinkedin className="socIcon" href="" />
        <AiFillTwitterSquare className="socIcon" href="" />
        <AiFillGithub className="socIcon" href=""/>
        <AiFillFacebook className="socIcon" href=""/>
        <AiFillInstagram className="socIcon" href="" />
    </div>
</div>
    )
}

export default Home;