import Blog from "@models/blog";
import Like from "@models/like"
import db from "@utils/database";
import { connection } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
  await db()
  try {
    const {blogId} = params;

    const ipAddress = req.headers.get("x-forwarded-for") || req.connection.remoteAddress;

    const like = new Like({
        owner: String(ipAddress),
        blog: blogId
    })

    await like.save();
    
    const blog = await Blog.findByIdAndUpdate(blogId, {
        $push: {likes: like._id}
    }, {new: true})

    if(!blog){
        return NextResponse.json({ Message: `No blog found with blog id: ${blogId}` }, {status: 404});
    }

    return NextResponse.json({ Blog: blog, Message: "Liked blog successfully", Success: true });
  } catch (error) {
    console.error(`Error occured at: ${req.url}\nError: ${error}`)
    return NextResponse.json({ Message: `Error occured: ${error.message}`, Success: false }, {status: 500});

  }
}
