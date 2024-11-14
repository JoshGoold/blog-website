import db from "@utils/database"
import bcrypt from "bcrypt"
import admin from "@models/admin"
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";


export async function POST(req,res){
    await db();

    const body = await req.json();

    const {email, password} = body;
    
    try {
        const user = await admin.findOne({email: email});

        if(!user){
            return NextResponse.json({Message: `No user found with email: ${email}`, Success: false}, {status: 404})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return NextResponse.json({Message: "Invalid Credentials", Success: false}, {status: 400})
        }

        const userID = user._id;
        const token = jwt.sign({userID}, process.env.JWT_SECRET, {expiresIn: '5h'});

        return NextResponse.json({Message: "Admin Authenticated", token: token, Success: true}, {status: 200})
        
    } catch (error) {
        console.error(`Error logging admin at: ${req.url}\nError: ${error}`)
        return NextResponse.json({Message: "Error in admin authentication", Success: false, Error: error.message}, {status: 500})
    }
}
