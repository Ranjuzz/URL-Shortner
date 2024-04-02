import mongoose from "mongoose";
import shortid from "shortid";


const shortUrlSchema = new mongoose.Schema ({
    full: { 
        type: String,
        required: true
    },
    short:{
        type : String,
        required: true,
        default: shortid.generate 
    },
    clicks: {
        required: true,
        type: Number,
        default: 0
    }
})

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)

export default ShortUrl;