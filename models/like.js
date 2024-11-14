import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
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


export default mongoose.models.Like || mongoose.model("Like", LikeSchema)