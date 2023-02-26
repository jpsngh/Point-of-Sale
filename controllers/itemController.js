
import Items from "../models/ItemModel.js";
import mongoose from "mongoose";
 const itemController =async(req,res)=>{
try {
    const items = await Items.find();
    res.status(200).send(items)
} catch (error) {
    console.log(error)
}
}

const addItemController =async(req,res)=>{
    try {
        const item = new Items(req.body);
        await item.save();
        res.status(201).send("Item added successfully");
    } catch (error) {
        res.status(400).send((error)=>{
            console.log(error.message);
        });
        
    }
}

const updateItemController =async(req,res)=>{
    try {
        const  id = req.body.itemId;
        const update = req.body;
     const result =    await Items.findOneAndUpdate({_id:id},update,{new:true});
       console.log(result.data);
        res.status(200).send(result.data);
    } catch (error) {
        res.status(400).send((error)=>{
            console.log(error.message);
        });
        
    }
}
const deleteItemController =async(req,res)=>{
    try {
        const  itemId = req.body.itemId;
      
     const result =    await Items.findByIdAndDelete(itemId);
  
     
        res.status(200).send(result.data);
    } catch (error) {
        res.status(400).send((error)=>{
            console.log(error.message);
        });
        
    }}
export {itemController,addItemController,updateItemController,deleteItemController}