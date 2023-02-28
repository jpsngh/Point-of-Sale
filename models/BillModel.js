import mongoose from "mongoose";
const billSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    items: {
        type: Array,
        required: true
        
    },

    date: {
        type: Date,
        default: Date.now()

       
       
    }
    
},{timestamp:true}
);

const Bills = mongoose.model("Bills", billSchema);

export default Bills;