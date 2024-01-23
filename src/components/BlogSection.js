import * as React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import "./BlogSection.css";
import blog_img1 from "../images/blog_img1.jpeg";
import { BlogData, FeatureBlogData } from "../BlogData";
import { ActionAreaCard } from "./BlogCard";

const BlogSection = () => {

  const renderCardCount = window.innerWidth < 300 ? 3 : BlogData.length; 

  return (
    <div className="blog-section-container" >
        <div className="blog-content" >
            <div className="blog-section-title">
                <h1>AI Lab Blog</h1>
                <h3>Featured Story</h3>
            </div>

            <div className="main-blog">
              <div className="main-blog-img">
                <img src={blog_img1} alt="feature blog" />
              </div>
            
              <div className="main-blog-content">
                <h2>
                  <Link to='feature_blog' className="blog-link">Feature Blog Title</Link>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo quis nunc at molestie. Suspendisse ac elit lectus. </p>
              </div>
            </div>

            <div className="other-blogs">
              <div className="card-row">
                {BlogData.slice(0, renderCardCount).map((card) => (
                  <ActionAreaCard key={card.id} title={card.title} authors={card.authors} date={card.date} imageURL={card.imageURL} link={card.link}/>
                ))}
              </div>
            </div>
            
        </div>
    </div>
  );
};

export default BlogSection;
