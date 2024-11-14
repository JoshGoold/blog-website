import Blog from "@models/blog"
import db from "@utils/database"
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    await db();

    try {
        const {blogId} = params;

        const blog = await Blog.findById(blogId).populate('likes').populate('comments').lean()

        if(!blog){
            return NextResponse.json({Message: `No blog found with ID: ${blogId}`, Success: false}, {status: 404})
        }

        return NextResponse.json({Blog: blog, Success: true}, {status: 200})

    } catch (error) {
        console.error(`Error occured at: ${req.url}\nError: ${error}`)
        return NextResponse.json({Message: "Error occured while finding blog by id", Success: false}, {status: 500})
    }
}