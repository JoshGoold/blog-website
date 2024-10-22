import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    blog: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Blog"
    }
})

export default mongoose.model("Image", ImageSchema)