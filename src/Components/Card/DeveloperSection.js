import React from 'react';
import './DeveloperSection.css'
const DeveloperSection = () => {
    return (
        <div className="developer-main">
            <section className="developer-info"><span>Developer Info</span></section>
            <section className="developer-name"><span className="developer-info-tag">Name: </span><span className="developer-name-answer">Patel Shubhamkumar</span></section>
            <section className="developer-profile"><span className="developer-info-tag">Profile: </span><span className="developer-profile-answer">MERN and Flutter Developer</span></section>
            <section className="developer-study"><span className="developer-info-tag">Study: </span><span className="developer-study-answer">Computer Science and Engineering</span></section>
            <section className="developer-college"><span className="developer-info-tag">College: </span><span className="developer-college-answer">National Institute of Technology, Jalandhar</span></section>
            <div className="developer-btn-div"><button className="developer-btn"><a href="http://patel-shubham-portfolio.herokuapp.com/" target="_newPage">Contact Me</a></button></div>
        </div>
    )
}

export default DeveloperSection
