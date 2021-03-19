const express = require('express')
const bodyparser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
require('./conn');
const User=require('./model')

const http =require('http').createServer(app)

const PORT =process.env.PORT || 8080

http.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})


// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))



app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/fonts'))
app.use(express.static(__dirname + '/images'))
app.use(express.static(__dirname + '/js'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')

})

//connection to database

mongoose.connect('mongodb+srv://rajnish:rajnish123@myproject.c1x0e.mongodb.net/rajnish?retryWrites=true&w=majority',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.warn("connected with db");
})
 
app.post('/',(req,res)=>{  
    try {  
    var area = new User({  
        name : req.body.name,
        email : req.body.email,
        comments:req.body.comments
    }); 

area.save((err,data)=>{  
    if(err){  
    console.log(err)  
    }else{  
        res.sendFile(__dirname + '/index.html') ; 
    }  
    })  
    } catch (error) {  
    console.log(error);  
    }  
    });  