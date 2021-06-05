const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workshopTempSchema = new Schema({
    workshop:{
        type: Schema.Types.ObjectId, ref: 'Workshop',
        require: true 
    },
    topic: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    conductedBy: [
        {
            name: {
                type: String,
                
            },
            organization: {
                type: String,
                
            },
            description: {
                type: String,
                
            },
        },
    ],
    conductedOn:{
        type: Date,
        
    }
});

const WorkshopTemp = mongoose.model("WorkshopTemp", workshopTempSchema);

module.exports = WorkshopTemp;
