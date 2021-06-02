import React from 'react';
import './Card.css';
import doge from '../../Images/doge.jpg';
const Card = (props) => {
    return (
        // console.log('page rendered'),
        <div className='card-main'>
            <div className="card-left">
                <img src={props.imgLink} alt="news img" className="card-img" />
            </div>
            <div className="card-right">
                <div className="card-title">
                    <p>{props.heading}</p>
                </div>
                <div className="card-details">
                    <p>{props.description}</p>
                </div>
                <div className="card-news-info">
                    <div className="date">{
                        props.date.slice(0, 10)
                    }</div>
                    <div className="card-publisher">{props.newsBy}</div>
                    <a href={props.newsLink} target='_newTab'><button className="card-read-btn">Read it</button></a>
                </div>
                <div className="mobile-btn-div"><a href={props.newsLink} target='_newTab'><button className="card-read-btn-mobile-view">Read it</button></a></div>
            </div>
        </div>
    )
}

export default Card
