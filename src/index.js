const express = require('express');
const cors = require('cors');
const { graphQLHTTP } = require('graphql-http')

const mongoose = require("mongoose");
// const connectDB = require('./config/db');
// const schema = require('./graphql/schema');
// const resolvers = require('./graphql/resolvers');

var app = express()
app.use(cors)

mongoose.connect("mongodb://127.0.0.1:27017/facebook", {
    	useNewUrlParser : true,
        useCreateIndex : true,
    }).then(()=>{
    	console.log("[===MongoDB에 연결되었습니다.===]");
    }).catch((err)=>{
    	console.error(err);
    });