import express from "express";
const app = express();

app.get("/home",(req,res)=>{
    res.send("This is home page")
});

app.get("/contacts",(req,res)=>{
    res.send("Contact us at contact@contact.com")
})

app.get("/about",(req,res)=>{
    res.json({msg:"Welcome to the about page"});
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})