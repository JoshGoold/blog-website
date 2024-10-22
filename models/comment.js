import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    blog: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Blog"
    }
})

export default mongoose.model("Comment", CommentSchema)