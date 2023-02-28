import mongoose,{connect}  from "mongoose";
import "colors"
mongoose.set("strictQuery", true);
const db = async () => {
mongoose.connect(process.env.MONGO_REMOTE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
  
}).then(()=>{

console.log("connection established".bgGreen.italic)
})
.catch((error)=>{
    console.log(error);
    console.log("connection failed".bgRed);
     
})
}

export default db;