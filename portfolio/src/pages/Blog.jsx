import React from 'react'
import { useState } from 'react'
import '../css/BlogPage/Blog.css'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <div className='blog-wrapper'>
      <div className="blog-header">
        <h1 className='blog-h'>The OK Archives</h1>
      </div>
      <div className="blog-exp">
        <p className="b-exp">This is a space for the things that catch my attention; the tech that shapes how we think, the places that stay with you long after you’ve left, the sports that keep the mind sharp, and the universe that keeps us humble. I write to make sense of what I learn and notice along the way. No single theme, just an honest mix of thoughts worth sharing.</p>
      </div>
      <div className="writing-header">
        <h3 className="writing-h">My Thoughts</h3>
        <form action="" className="topic">
          <label htmlFor="topic">Theme</label>
          <div className="dropdown-wrapper">
            <select 
              name="topics" 
              id="topics"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
              onBlur={() => setIsDropDownOpen(false)}
            >
              <option value="General">General</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Astronomy">Astronomy</option>
              <option value="Sport">Sport</option>
            </select>
            <i className={`fa-solid ${isDropDownOpen ? 'fa-angle-up' : 'fa-angle-down'} dropdown-icon`}></i>
          </div>
        </form>
      </div>
      <div className="blog-elements-wrapper">
        <div className="blog-elements">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  )
}

export default Blog