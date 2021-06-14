const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const PORT = 5000;
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => {console.log(err);})

app.listen(PORT, ()=>{console.log(`Server listening at ${PORT}`)})