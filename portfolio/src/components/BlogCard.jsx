import React from 'react'
import '../css/BlogPage/BlogCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const BlogCard = () => {
  return (
    <div className="blog-card-wrapper">
        <div className="top">
            <div className="blog-element-header">
                <p className="blog-title">First Blog</p>
            </div>
            <div className="blog-date">
                <p className="entry-date">6/12/2025</p>
            </div>
        </div>
        <div className="middle">
            <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum numquam quo! Sit consequatur rem eaque odio, harum voluptates id...</p>
            </div>
        </div>
        <div className="bottom">
            <div className='writer'>
                <i className="fa-solid fa-user" style={{ color: "#ededed" }}></i>
                <p className="writer-name">Ozan Kurkcu</p>
            </div>
            <div className='topic'>
                <i className="fa-solid fa-tag" style={{ color: "#ededed" }}></i>
                <p className="entry-topic">Interest</p>
            </div>
            <div className='reading-time'>
                <i className="fa-solid fa-hourglass-half" style={{ color: "#ededed" }}></i>
                <p className="entry-reading-time">5 Mins</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard