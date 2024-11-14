import db from "@utils/database"
import View from "@models/view";
import { NextResponse } from "next/server";



export async function PUT(req,res){

    await db()

    try {
        const ipAddress = req.headers.get("x-forwarded-for") || req.connection.remoteAddress;
        const pageUrl = req.headers.get("Page-URL");

        const view = new View({
            viewer: String(ipAddress),
            page: pageUrl
        })
        await view.save()

        return NextResponse.json({Message: "View insight successfully documented", Success: true})
    } catch (error) {
        console.error(`Error creating view insight\nURL: ${req.url}\nError: ${error}`)
        return NextResponse.json({Message: "Error creating view insight", URL: req.url, error: error.message, Success: false},{status:500})
    }
}