import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
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

export default mongoose.model("Like", LikeSchema)