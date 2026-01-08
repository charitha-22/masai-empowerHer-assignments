import express from "express";
import {read} from "./read.js"
import os from "os";
import {promises as dns} from "dns";

const app = express();

app.get("/test",(req,res)=>{
    res.send("Test routing is working..!");
});

app.get("/readfile",async (req,res)=>{
    try{
        const content = await read()
        res.send(content)
    }catch(err){
        res.send(err);
    }
    
})

app.get("/systemdetails",(req,res)=>{
    const systemData = {
        "platform":os.platform(),
        "totalMemory":os.totalmem(),
        "freeMemory":os.freemem(),
        "cpuModel":os.cpus()[0].model
    }
    res.json(systemData);
})

app.get("/getip",async (req,res)=>{
    const ip = {
        "hostName":"www.masaischool.com",
        "ipAddress":(await dns.lookup("www.masaischool.com")).address
    }
    res.json(ip);
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})