const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Candy = new Schema(
{
    title:{type: String,required:true},
    price: {type:Number,required:true},
    owner: {type:String,required:true},
    package:[{type:String}]
},
{
    id: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
}

);
module.exports = mongoose.model("Candy",Candy)