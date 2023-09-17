const express = require("express");
const router = express.Router();

const credential={
    email:"admin@gmail.com",
    password:"123"
}

//Login user
router.post('/login',(req,res)=>{
    if(req.body.email===credential.email && req.body.password===credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        
    }else{
        res.end("invalid username");
    }
})

//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("Unauthorized user")
        res.send(req.session.user);
    }
})

//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("something went wrong");
        }else{
            res.render("base",{title:"express",logout:"Logout successfully"})
        }
    })
})

module.exports=router;