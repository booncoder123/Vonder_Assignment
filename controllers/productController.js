const mongoose = require('mongoose');
const Candy = require('../models/candy')


exports.getProducts = async (req,res,next) => {
    try{
        const candyData = await Candy.find()
        
        //okay 
        res.status(200).json({
            message: "Fetched Buses successfully.",
            data: candyData,
          });
        console.log("Candy yum!")

    } catch(err){
        console.log("err: ",err)
        res.send(err)
    }
}


exports.postProducts = async (req,res,next) => {
    console.log("POST")
    try{
        const title = req.body.title
        const price = req.body.price
        const owner = req.body.owner
        const pack = req.body.package

       
        const candy = new Candy({
            title : title,
            price : price,
            owner : owner,
            package: pack
          });
    
          candy.save();
          res.status(201).json({ message: "Candy created!", candy: candy });
        
        console.log("Candy yum!")

    } catch(err){
        console.log("err: ",err)
        res.send(err)
    }
}
exports.findProducts =  async (req,res,next) => {
    try{
        const title_candy = req.params.title
        console.log(req.params.title)

        
        const candy = await Candy.findOne({title : title_candy})
        res.status(200).json({ message: "Candy fetched!", candy: candy });
    }
    catch(err){
        res.setEncoding(err)
    }
}

exports.deleteProductById =  async (req,res,next) => {
    try{
        const id_candy = req.params.id
        console.log(req.params.id)

        
        const candy = await Candy.findByIdAndDelete({_id : id_candy})
        res.status(200).json({ message: "Candy fetched!", candy: candy });
    }
    catch(err){
        res.setEncoding(err)
    }
}

exports.updateProducts = async (req,res,next) => {
    console.log("POST")
    try{

        const id_candy = req.params.id

        const title = req.body.title
        const price = req.body.price
        const owner = req.body.owner
        const pack = req.body.package
        

       
        const new_candy = new Candy({
            title : title,
            price : price,
            owner : owner,
            package: pack
          });
    
          const  dy = await Candy.findOneAndDelete({_id : id_candy},new_candy)
          res.status(200).json({ message: "Candy updated!", candy: new_candy });
        
        console.log("Candy yum!")

    } catch(err){
        console.log("err: ",err)
        res.send(err)
    }
}