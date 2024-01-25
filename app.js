import mongoose from "mongoose";
const express = require('express');
const app = express();

mongoose.connect("mongodb+srv://ervintombak:0MTJOEpkQwWA1Iei@cluster0.yynfjjn.mongodb.net/");
const database = mongoose.connection;

app.get('/', (req,res) => {
    res.send('express test');
})

app.listen(3015, () => {
    console.log('server is running');
})