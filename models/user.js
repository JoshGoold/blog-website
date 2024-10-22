import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    blogs: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Blog"
    }]
})

export default mongoose.model("User", UserSchema)