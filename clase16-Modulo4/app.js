//Levantar un servidor con Express

const express = require('express');
const app = express();

app.get('/',(req,res) => {res.send("Hello World!")})

app.listen(3000, ()=> {console.log("server run in port 3000");});