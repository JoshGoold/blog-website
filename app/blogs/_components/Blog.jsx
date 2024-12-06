import React, { useState } from "react";

const Blog = ({ blogData, id, getData }) => {
  const [com, setCom] = useState(""); // State for new comment input
  const [view, setView] = useState(""); // State for toggling modal view

  // Handle "like" functionality
  const like = async () => {
    try {
      const response = await fetch(`/api/blogs/post/${id}/like`, { method: "PUT" });
      if (response.ok) {
        console.log("Blog liked!");
        alert("Blog Liked!")
        getData(); // Refresh blog data to show updated likes
      }
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };

  // Handle "add comment" functionality
  const comment = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const response = await fetch(`/api/blogs/post/${id}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: com }), // Send the comment content
      });

      const data = await response.json();
      if (data.Success) {
        alert("Comment added successfully!");
        setCom(""); // Clear the input
        setView(""); // Close the modal
        getData(); // Refresh the blog data to show the new comment
      } else {
        alert(data.Message);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div id={id} className="p-10 cursor-pointer relative shadow-lg shadow-grey rounded-lg">
      {/* Blog content */}
      {blogData?.content?.map((element, index) => (
        <div key={index} className={`${element.styles.join(" ")} p-5`}>
          <section>{element.text}</section>
        </div>
      ))}

      {/* Like and comment buttons */}
      <ul className="flex gap-3 p-3 bottom-0 absolute">
        <li>
          <button onClick={like}>❤️</button>
          <small>{blogData?.likes?.length || 0}</small>
        </li>
        <li>
          <button onClick={() => setView("comment")}>📩</button>
          <small>{blogData?.comments?.length || 0}</small>
        </li>
      </ul>

      {/* Comment modal */}
      {view === "comment" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] md:w-[50%] lg:w-[40%] relative">
            <button
              onClick={() => setView("")}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <h3 className="text-lg font-bold mb-4">Comments</h3>

            {/* Display existing comments */}
            <div className="overflow-y-auto max-h-[200px] mb-4">
              {blogData.comments && blogData.comments.length > 0 ? (
                blogData.comments.map((comm, index) => (
                  <div key={index} className="border-b border-gray-300 py-2">
                    <p>{comm.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>

            <form onSubmit={comment} className="flex flex-col gap-3">
              <textarea
                value={com}
                onChange={(e) => setCom(e.target.value)}
                placeholder="Write your comment..."
                className="border border-gray-300 p-2 rounded-md w-full resize-none"
                rows="2"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Add Comment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
