import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Like"
    }],
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Comment"
    }],
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
})

export default mongoose.model("Blog", BlogSchema)