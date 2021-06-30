const router = require("express").Router();
const { request } = require("express");
let User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

//http://localhost:8070/user/register
//register a new user
router.route('/register').post((req, res)=> {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const userType = req.body.userType;
    const email = req.body.email;
    const phone = req.body.phone;

    const newUser = new User();

    newUser.name = name;
    newUser.username = username;
    newUser.password = newUser.generateHash(password);
    newUser.userType = userType;
    newUser.email = email;
    newUser.phone = phone;

    newUser.save().then((user)=> {
            // res.json("User Registered")
            jwt.sign(
                {id: user._id, userType: user.userType}, 'jwtSecret', {expiresIn: '1d'},
                (err, token)=>{
                    if(err) throw err;
                    res.json({
                        user,
                        token
                    });
                }
            )
        }).catch((err)=>{
            console.log(err)
    })
    
})
//http://localhost:8070/user/
//get all users
router.route('/').get((req, res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

//get a user by the id
router.route('/:id').get(async(req, res)=>{
    let id = req.params.id;
    User.findById(id).then((user)=>{
        res.status(200).send({user: user})
    }).catch((err)=>{
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})
module.exports = router;