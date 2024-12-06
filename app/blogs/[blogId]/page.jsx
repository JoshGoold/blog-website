"use client";
import React, { useEffect, useState } from "react";
import Blog from "../_components/Blog";
import { useParams } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [blogData, setBlogData] = useState([]);
  const params = useParams(); // Get dynamic route parameters
  const { blogId } = params; // Extract blogId
  const getData = async () => {
    try {
      const response = await fetch(`/api/blogs/post/${blogId}`);
      const data = await response.json();
      if (data.Success) {
        setBlogData(data.Blog);
        console.log(data?.Blog);
      } else {
        alert(data.Message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, [blogId]);
  return (
    <div>
      <Link
        className="p-2 rounded-md m-10 shadow-md bg-blue-500 text-white"
        href={"/blogs"}
      >
        Back
      </Link>
      {blogData ? (
        <Blog getData={getData} blogData={blogData} id={blogId} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;
