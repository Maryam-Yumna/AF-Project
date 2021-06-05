const router = require("express").Router();
const { request } = require("express");
let User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');


router.route('/login').post((req, res)=> {
    
    const password = req.body.password;
    const email = req.body.email;

    if(!email || !password){
        return res.status(400).json({msg: 'Please enter all feilds'});
    }

    User.findOne({email})
    .then(user=>{
        if(!user) return res.status(400).json({msg: 'User does not exist'});

        //vaidate password
        if(!User.validate(password)) return res.status(400).json({msg: 'Invalid credentials'});

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
        
    })
    .catch((err)=>{
            console.log(err)
    })
    
})

router.route('/user').get(auth, (req, res)=>{
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})
module.exports = router;