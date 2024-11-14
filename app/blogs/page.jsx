"use client"
import BlogList from "./_components/BlogList"

const page = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <div className="">
        <BlogList route="all"/>
      </div>
    </div>
  )
}

export default page
