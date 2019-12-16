//3rd party libraries
const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");


// require mongo Db
require('dotenv').config();
require("./config/db");







//express app
const app = express();
app.listen(process.env.PORT);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());    


app.get("/",(req,res)=>{
    res.send("OK");
});

app.get("/users",(req,res)=> {

    User.find({},(err,users) => {
        res.json(users);

    });
});

app.get("/users/:userId",(req,res)=> {

    const userId=req.params.userId;
    User.findOne({_id: userId},(err,users) => {
        res.json(users);

    });

});

app.post("/users",(req,res)=> {
    const u = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    u.save().then(()=>{
        res.json({
            message:"User created"
        })
    })
});


app.delete("/users/:userId",(req,res)=> {

    const userId=req.params.userId;
    User.deleteOne({_id:req.params.userId},(err,) => {
        res.json({message:"user deleted"});

    });

});