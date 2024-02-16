import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv';
import authRoute from './routing/authRoute.js';
import bookingRoute from './routing/dataRoute.js';
import { columns, rowData, instructions } from "./Data.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:'true'}));
app.use(bodyParser.json({extended:true}));

app.use('/auth', authRoute);
app.use('/data', bookingRoute);



const PORT = process.env.PORT || 5002;
app.listen(PORT, ()=>{
    console.log(`Server is Running on Port ${PORT}`);
})