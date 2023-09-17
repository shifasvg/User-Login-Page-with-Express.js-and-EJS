const express = require('express');
const app = express();
const session = require('express-session');
const {v4:uuid4} = require('uuid')
const router = require('./router')

const port = process.env.PORT||3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');

app.use(session({
    secret:uuid4(),
    resave:false,
    saveUninitialized:true
}))

app.use('/route',router);

//home route
app.get("/",(req,res)=>{
    res.render('base.ejs',{title:"Login page"})
})

app.listen(port,()=>console.log(`server started on port http://localhost:${3000}`))