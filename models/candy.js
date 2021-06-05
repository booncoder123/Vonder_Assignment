const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Candy = new Schema(
{
    title:{type: String,require:true},
    price: {type:Number,require:true},
    owner: {type:String,require:true},
    package:[{type:String}]
},
{
    id: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
}

);
module.exports = mongoose.model("Candy",Candy)