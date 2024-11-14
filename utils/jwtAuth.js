import jwt from 'jsonwebtoken';

export async function verifyToken(req, res) {
    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        return decoded;
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}


/*
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
    const token = req.cookies.get('token')?.value;
    
    if (!token) {
        return NextResponse.redirect('/login');
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return NextResponse.redirect('/login');
    }

    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: ['/protected-route/:path*'],
};
*/