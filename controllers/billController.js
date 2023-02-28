
import Bills from "../models/BillModel.js";
import mongoose from "mongoose";
 const billController =async(req,res)=>{
try {
    const items = await Bills.find();
    res.status(200).send(items)
} catch (error) {
    console.log(error)
}
}

const addBillController =async(req,res)=>{
    try {
        const {customer,amount,contact,payment,items}= req.body
        const item = new Bills({
            customer,
            amount,
            contact,
            payment,
            items
        });
        await item.save();
        res.status(201).send("Bill added successfully");
    } catch (error) {
        res.status(400).send((error)=>{
            console.log(error.message);
        });
        
    }


}

export {billController,addBillController}