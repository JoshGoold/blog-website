import mongoose from "mongoose";


const ViewSchema = new mongoose.Schema({
    viewer: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    }
})

export default mongoose.models.View || mongoose.model("View", ViewSchema)