const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paperUploadSchema = new Schema({
    fileName:
    {
        type: String,
        required: true
    },
    filePath:{
        type:String
    },
    fileSize:{
        type: String
    },

    uploadDate: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    approval: {
        type: String,
        default: "pending"
    },
    title:{
        type: String
    }
    
}, {timestamps: true});

const PaperUpload = mongoose.model("paperUpload", paperUploadSchema);

module.exports = PaperUpload;
