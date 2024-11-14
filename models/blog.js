import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    content: [{
        text: { type: String, required: true },
        styles: [String]
    }],
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Like"
    }],
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Comment"
    }],
    owner: {
        type: String
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => new Date()
    }
    
})

// delete mongoose.models.Blog


export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema)