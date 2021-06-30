const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workshopUploadSchema = new Schema({

    title:{
        type: String
    },
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
        ref: "User"
    },
    approval: {
        type: String,
        default: "pending"
    }
    
}, {timestamps: true});

const WorkshopUpload = mongoose.model("workshopUpload", workshopUploadSchema);

module.exports = WorkshopUpload;
