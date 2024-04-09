const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./src/routes/User')
const bodyParse = require('body-parser')
dotenv.config();

app.use(bodyParse.urlencoded());
app.use(userRoute);

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGOOSE_URL)
    .then(()=>{
        console.log('DB Connected Successfully && Server is up...');
    }).catch((error)=>{
        console.log(error);
    })
})