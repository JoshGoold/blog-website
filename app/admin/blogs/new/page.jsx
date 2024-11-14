"use client";
import React from "react";
import { useState, useEffect } from "react";
import Item from "./_components/item";
import Preview from "./_components/Preview";
import { motion } from "framer-motion";

const page = () => {
  const [content, setContent] = useState([]);
  const [items, setItems] = useState([]);
  const [view, setView] = useState("editor");

  // Function to add a new item to the content array
  const addItem = () => {
    try {
      setItems((prevContent) => [
      ...prevContent,
      { id: prevContent.length + 1 }, // Create a unique ID for each new item
    ]);
    } catch (error) {
      console.error(error)
    }
    
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSaveContent = (newContent) => {
    setContent(prevContent => [...prevContent, newContent]);
  };

  return (
    <div className="p-5">
      <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
       className="py-5">
        <h1 className="text-2xl font-thin">Admin Blog Creation Menu</h1>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
       className="flex gap-5">
        <button
          onClick={() => setView(view === "editor" ? "preview" : "editor")}
          className="hover:underline"
        >
          {view === "editor" ? "Preview" : "Editor"}
        </button>
      </motion.div>
      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center text-4xl my-20 py-20 font-thin"
        >
          <h1>Create an element to begin creating a blog!</h1>
        </motion.div>
      )}
      {view === "editor" && (
        <div className="">
          {/* Render each Item component in the content array */}
          {items.map((item, index) => (
            <div key={index} className="p-0 m-0">
              <button
                className="hover:underline"
                onClick={() => removeItem(item.id)}
              >
                Remove Element
              </button>
              
              <Item setContent={handleSaveContent} />
              
            </div>
          ))}
        </div>
      )}
      {view === "preview" && <Preview content={content} />}
      {view === "editor" && (
        <div className="text-center">
          <button
            onClick={() => addItem()}
            className="bg-green-500 rounded-lg  p-3 text-sm text-white"
          >
            New Element
          </button>
          </div>
        )}
    </div>
  );
};

export default page;
