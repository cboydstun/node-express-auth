const express = require('express');
const app = express();

const PORT = 5000;

app.use('/', (req, res) => {
    console.log("main url")
})

app.listen(PORT, ()=>{console.log(`Server listening at ${PORT}`)})