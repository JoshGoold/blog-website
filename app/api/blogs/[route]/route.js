import db from "@utils/database";
import Blog from "@models/blog";
import { NextResponse } from "next/server";
import Like from "@models/like";
import Comment from "@models/comment"
export async function GET(req, { params }) {
  await db();

  try {
    let blogs;

    // Determine what to fetch based on the route
    switch (await params.route) {
      case "trending":
        blogs = await Blog.find().sort({ likes: -1 }).limit(5).populate('likes').populate('comments').lean();
        break;
      case "latest":
        blogs = await Blog.find().sort({ createdAt: -1 }).limit(5).populate('likes').populate('comments').lean();
        break;
      case "all":
        blogs = await Blog.find().populate('likes').populate('comments').lean();
        break;
      default:
        blogs = [];
    }

    if (!blogs || blogs.length === 0) {
      return NextResponse.json({ Message: "No blogs found", Success: false }, { status: 404 });
    }

    return NextResponse.json({ Blogs: blogs, Success: true }, { status: 200 });
  } catch (error) {
    console.error(`Error occurred fetching blogs at: ${req.url}\nError: ${error}`);
    return NextResponse.json({ Message: "Error fetching blogs", Success: false }, { status: 500 });
  }
}
