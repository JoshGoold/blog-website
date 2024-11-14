import db from "@utils/database"
import Blog from "@models/blog"
import Comment from "@models/comment"
import { NextResponse } from "next/server";


export async function PUT(req,{ params }){

    await db()

    const {blogId} = params;
    const ipAddress = req.headers.get("x-forwarded-for") || req.connection.remoteAddress;

    const body = await req.json();

    const {content} = body;

    try {

        const comment = new Comment({
            owner: String(ipAddress),
            blog: blogId,
            content: content
        })

        await comment.save();

        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: {comments: comment._id}
        }, {new: true});

        if(!blog){
            return NextResponse.json({Message: `No blog found with id: ${blogId}\nAt : ${req.url}`, Success: false}, {status: 404})
        }

        return NextResponse.json({Blog: blog, Message: "Commented successfully!", Success: true})
    } catch (error) {
        console.error(`Error uploading comment to blog\nat : ${req.url}\nError: ${error}`)
        return NextResponse.json({Message: "Error creating and uploading comment", Url: req.url, Error: error.message}, {status: 500})
    }
}