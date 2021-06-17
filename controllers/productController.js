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

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

exports.postProducts = async (req,res,next) => {
    console.log("POST")
    try{
        const title = req.body.title
        const price = req.body.price
        const owner = req.body.owner
        const pack = req.body.package
        
        if(!isString(title))
            throw new  Error('Title value must be a string')
        if(!isString(owner))
            throw new  Error('Owner value must be a string')
        if(price + 0 != price)
            throw new Error('Price value must be a number type')
       
        const candy = new Candy({
            title : title,
            price : price,
            owner : owner,
            package: pack
          });
    
          await candy.save();
          res.status(200).json({ message: "Candy created!", candy: candy });
        
        console.log("Candy Yum Yum!")

    } catch(err){
        console.log("err: ",err)
        if (!err.status) {
            err.status = 500;
          }
        next(err)
    }
}
exports.findProducts =  async (req,res,next) => {
    try{
        const title_candy = req.params.title
        console.log(req.params.title)

        
        const candy = await Candy.findOne({title : title_candy},(candy) => {
            try{
                if(candy===null)
                {
                    throw Error("Cannot find the Eiei! ppopopopop")
                }
            }
            catch(err){
                res.status(404).json({ message: "Candy Error! cannot find candy", error: err.message });
            }
                

        })
        
        res.status(200).json({ message: "Candy fetched!", candy: candy });
    }
    catch(err){
        res.status(404).json({ message: "Candy Error! ID id invalid", error: err.message });
    }
}

exports.deleteProductById =  async (req,res,next) => {
    try{
        const id_candy = req.params.id
        console.log(req.params.id)

        const candy = await Candy.findByIdAndDelete({_id : id_candy})
        res.status(200).json({ message: "Candy Deleted!", candy: candy });
    }
    catch(err){
        res.status(404).json({ message: "Candy Error! ID id invalid", error: err.message });
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

        
        if(!isString(title))
            throw new  Error('Title value must be a string')
        if(!isString(owner))
            throw new  Error('Owner value must be a string')
        if(price + 0 != price)
            throw new Error('Price value must be a number type')
        

       
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
        res.status(404).json({ message: "Candy Error!", error: err.message });
    }
}