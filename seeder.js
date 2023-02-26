import mongoose from "mongoose";
import  "colors";
import dotenv from "dotenv";
import db from "./dbconfig.js";
import Items from "./models/ItemModel.js";
import items from "./data.js";


dotenv.config();
db();
const  importData = async () => {
    try {
        await Items.deleteMany();
        await Items.insertMany(items);
        console.log("Data Imported".green.inverse);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }


}
importData();

