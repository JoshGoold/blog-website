"use client"
import React, { useEffect, useState } from 'react';
import Blog from './Blog';  // Assuming Blog component is in the same folder

const BlogList = ({route}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch(`/api/blogs/${route}`);  // Adjust to your API route
      const data = await response.json();
      if (data.Success) {
        console.log(data.Blogs)
        setBlogs(data.Blogs);  // Set the fetched blogs data to state
      } else {
        console.log(data.Message);
      }
    }
    
        fetchBlogs();  // Only fetch if there are no blogs
      
  }, [route]);

  return (
    <div>
      {blogs.map((blogData, index) => (
        <div key={index} className="">
        <Blog id={blogData._id} blogData={blogData} />
        </div>
      ))}
    </div>
  );
}

export default BlogList;