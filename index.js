import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "./routes/empRoute.js"
import orgRoute from './routes/orgRoute.js'
import teamRoute from './routes/teamRoute.js'
import cors from 'cors';
import fileUpload from "express-fileupload";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const db = 'mongodb+srv://mern:mernstack@cluster0.aouhbsf.mongodb.net/Orlan_Task?retryWrites=true&w=majority&appName=Cluster0';
const PORT = 3000;

mongoose.connect(db).then(
    ()=>{
        console.log('connected successfully');        
    }
).catch((error)=>{
    console.log('error',error);    
});


app.listen(PORT, ()=>{
    console.log('server is ruming on',PORT);
});

app.use("/api", userRoute);
app.use("/api", orgRoute);
app.use("/api", teamRoute);
app.use(fileUpload());  
