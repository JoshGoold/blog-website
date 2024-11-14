import db from '@utils/database'
import Blog from '@models/blog';
import user from '@models/admin';


export async function POST(req,res){

    await db()

    const body = await req.json();

    console.log(body)

    const {contents} = body;

    try {
        const newBlog = new Blog({
            owner: "Admin",
            content: contents
        })

        await newBlog.save()

        return new Response(JSON.stringify({Message: "Blog created successfully!", Blog: newBlog}))

    } catch (error) {
        console.error(`Error creating new blog at: ${req.url}\nError: ${error}`)
        return new Response(JSON.stringify({Message: "Error occured creating blog"}))
    }
    


}