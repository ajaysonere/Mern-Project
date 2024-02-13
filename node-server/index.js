import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import router from "./routers/taskRouter.js";

const app = express();


const connection  = async() => {
    const conn = await mongoose.connect("mongodb://localhost:27017/task");
    
    if(!conn){
       console.log('Something went wrong');
    }
    
    console.log("database connected successfully");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api" , router);

app.listen(4500, () => {
  connection();
  console.log("server is runing at 4500");
});
