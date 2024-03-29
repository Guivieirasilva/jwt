const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, required:true, minlength:3, maxlength:50},
    email:{type:String, required:true, minlength:10, maxlength:70},
    password:{type:String, required:true, minlength:6, maxlength:500},
    admin:{type:Boolean, default:false},
    createAt:{type:Date, default: Date.now}
})
module.exports = mongoose.model('User', userSchema)