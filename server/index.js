import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv';
import { columns, rowData, instructions } from "./Data.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:'true'}));
app.use(bodyParser.json({extended:true}));

app.get('/tableData/column', (req, res)=>{
    try{
        return res.status(200).json(columns)
    }catch(error){
        console.log("Ashab Error is: ", error.message)
    }
})

app.get('/tableData/row', (req, res)=>{
    try{
        return res.status(200).json(rowData)
    }catch(error){
        console.log("Ashab Error is: ", error.message)
    }
})

app.get('/booking/v1/info', (req, res)=>{
    try{
        return res.status(200).json(instructions)
    }catch(error){
        console.log("Ashab Error is: ", error.message)
    }
})

app.get('/tableData/row/:id', (req, res)=>{
    try{
        const id = req.params.id;
        const userData = rowData.filter((item) => item.label == id);
        return res.status(200).json(userData);
    }catch(err){
        console.log(err.message)
    }

    

})


const PORT = process.env.PORT || 5002;
app.listen(PORT, ()=>{
    console.log(`Server is Running on Port ${PORT}`);
})