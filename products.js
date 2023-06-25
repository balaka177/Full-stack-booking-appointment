const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Product=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    gmail:{
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
    },
    phone:{
        type:Sequelize.STRING,
        allowNull:false,
    },
});

module.exports=Product;