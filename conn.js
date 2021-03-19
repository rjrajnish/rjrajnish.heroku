var Userdb = require('./model');
// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

const user = new Userdb({
    name : req.body.name,
    email : req.body.email,
    comments: req.body.comments
})

// save user in the database
user
    .save(user)
    .then(data => {
        //res.send(data)
        res.redirect('/');
    })
    .catch(err =>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });}