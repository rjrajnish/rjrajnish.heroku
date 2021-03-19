const mongoose = require('mongoose');

var schema = new mongoose.Schema({
   name:String,
   email:String,
   comments: String,
})

const User= mongoose.model('userdb', schema);
module.exports=User;

  