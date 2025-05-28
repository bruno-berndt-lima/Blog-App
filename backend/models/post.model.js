import {Schema} from "mongoose"
import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true,
    },
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Number,
        default: false,
    },
    visit: {
        type: Boolean,
        default: 0,
    }, 
  }, 
  {timestamps: true}
);

export default mongoose.model("Post", postSchema);