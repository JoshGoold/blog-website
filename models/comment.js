import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,
    },
    blog: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Blog"
    }
})

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema)