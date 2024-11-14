"use client"
import { useState } from "react";
import BlogList from "./_components/BlogList";

const Layout = () => {
  const [category, setCategory] = useState("all");  // State to track the selected category

  // Event handler to set the selected category
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <ul className="flex lg:justify-start justify-center gap-8 ml-10 cursor-default">
        <li
          className={`hover:underline cursor-pointer ${category === "trending" && "underline"}`}
          onClick={() => handleCategoryClick("trending")}
        >
          Trending
        </li>
        <li
          className={`hover:underline cursor-pointer ${category === "latest" && "underline"}`}
          onClick={() => handleCategoryClick("latest")}
        >
          Latest
        </li>
        <li
          className={`hover:underline cursor-pointer ${category === "all" && "underline"}`}
          onClick={() => handleCategoryClick("all")}
        >
          All
        </li>
      </ul>

      <div className="my-10 w-[90%] ml-auto mr-auto">
        <BlogList route={category} />
      </div>
    </div>
  );
};

export default Layout;
