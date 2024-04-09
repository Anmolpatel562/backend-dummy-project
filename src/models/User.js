const mongoose = require('mongoose');

const User = mongoose.model('User',{
    firstName:String,
    lastName:String,
    email:String,
    phone:Number,
})

module.exports = User;