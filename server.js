const express = require('express');
const cors = require('cors');
const app = express();
var fs = require('fs');


app.use(cors({
    origin: "*"
}))

app.get('/api/error/:status',(req,res)=>{
    const status= req.params.status
    res.set('Timing-Allow-Origin','*');
    res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${status}`);
});

app.post('/api/error/:status',(req,res)=>{
    const status= req.params.status
        res.status(status).json(
          {  username: "abc",
                password: "test"
});
});

app.get('/api/error/500/:uuid',(req,res)=>{
        res.status(500).send(`OK `);
});

app.get('/api/error/:time/:status',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    setTimeout(function() {
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${status}`);
    }, time); 
});

app.post('/api/error/:time/:status',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    setTimeout(function() {
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${status}`);

    }, time); 
});



app.get('/api/error/:time/:status/:size',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    const size= req.params.size

    setTimeout(function() {
        const responseSize = size * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${status} ${responseString}`);
    }, time); 
});


app.post('/api/error/:time/:status/:size',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    const size= req.params.size

    setTimeout(function() {
        const responseSize = size * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${status} ${responseString}`);
    }, time); 
});

function generateString(size) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < size; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  }

const port= process.env.PORT || 4000;
app.listen(port, () =>console.log(`port ${port}`)  )
