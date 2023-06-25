const express=require('express');
const path=require('path');
const Product = require('./products');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.post('/add_data',(req,res,next)=>{
    
    const name=req.body.name;
    const gmail=req.body.email;
    const phone=req.body.phone;
    Product.create({
        name:name,
        gmail:gmail,
        phone:phone
    })
    .then((resp)=>{  
        console.log('Post THEN')
       res.redirect('/') 
    })
    .catch(err =>{
        console.log(err);
    })
    
})


router.get('/getdata',(req,res,next)=>{
    Product.findAll( )
    .then(resp=>{
    res.json(resp);
        
    }).catch(err =>{
        console.log(err);
    })
    
});

router.get('/get_users',async(req,res,next) =>{
    const users= await Product.findAll();
    res.status(200).json({allUsers : users});
    
})

router.delete('/delete-users/:id',async(req,res,next) =>{
    const uid=req.params.id;
    await Product.destroy({where:{id:uid}});
    res.sendStatus(200);
    //res.redirect('/')
}) 

module.exports=router;