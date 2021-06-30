const router = require("express").Router();
let User = require('../models/User');

test("User Added", ()=>{

    router.route('/register').post((req, res)=> {
    
        const newUser = new User();
    
        newUser.name = "Nino";
        newUser.username = "admin";
        newUser.password = newUser.generateHash("admin");
        newUser.userType = "admin";
        newUser.email = "admin@gmail.com";
    
        newUser.save().then((user)=> {
                res.json("User Registered")
            }).catch((err)=>{
                console.log(err)
        })
        
    })
})