const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const routes=require('./routes');

const Product=require('./products');

const db=require('../util/database');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(routes);


db.sync().then( resp =>{
    //console.log(resp);
}).catch(err => console.log(err))

app.listen(8080);