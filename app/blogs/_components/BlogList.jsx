"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import Blog from './Blog';  // Assuming Blog component is in the same folder

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
    <div className='lg:flex-row flex flex-col flex-wrap justify-center'>
      {blogs.map((blogData, index) => (
        <div key={index} className="lg:w-[20%] flex flex-col gap-10 flex-wrap bg-neutral-50 shadow-md  hover:shadow-lg hover:shadow-neutral-900 duration-300 p-5 m-5">
        {/* <Blog id={blogData._id} blogData={blogData} /> */}
        <span>
        <small className='text-neutral-400'>{blogData?.createdAt?.split("T")[0]}</small>
          <h1 className='text-3xl font-thin'>{blogData.content[0].text}</h1>
          </span>
          <Link href={`/blogs/${blogData._id}`} className='mt-auto text-white bg-blue-500 rounded-md hover:scale-105 duration-300 hover:shadow-lg p-2'>View Blog</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;