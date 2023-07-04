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

app.get('/api/error/:time/:status/300',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    let filename = 0;

    setTimeout(function() {
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        filename = 'filte300kb.js';
        fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.set('Timing-Allow-Origin','*');
          res.setHeader('Content-Type','application/json');
          res.set('Access-Control-Expose-Headers','*');
          return res.status(status).send('Error reading file');
        }
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${data}`);
    })

    }, time); 
});

app.get('/api/error/:time/:status/500',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    let filename = 0;

    setTimeout(function() {
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        filename = 'filte500kb.txt';
        fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.set('Timing-Allow-Origin','*');
          res.set('Access-Control-Expose-Headers','*');
          return res.status(status).send('Error reading file');
        }
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${data}`);
    })

    }, time); 
});

app.get('/api/error/:time/:status/800',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    let filename = 0;

    setTimeout(function() {
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        filename = 'filte800kb.txt';
        fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.set('Timing-Allow-Origin','*');
          res.set('Access-Control-Expose-Headers','*');
          return res.status(status).send('Error reading file');
        }
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${data}`);
    })

    }, time); 
});

app.get('/api/error/:time/:status/1000',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    let filename = 0;

    setTimeout(function() {
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        filename = 'filte1000kb.txt';
        fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.set('Timing-Allow-Origin','*');
          res.set('Access-Control-Expose-Headers','*');
          return res.status(status).send('Error reading file');
        }
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${data}`);
    })

    }, time); 
});

app.get('/api/error/:time/:status/4000',(req,res)=>{
    const time = req.params.time
    const status= req.params.status
    let filename = 0;

    setTimeout(function() {
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        filename = 'filte4000kb.txt';
        fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.set('Timing-Allow-Origin','*');
          res.set('Access-Control-Expose-Headers','*');
          return res.status(status).send('Error reading file');
        }
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${data}`);
    })

    }, time); 
});




const port= process.env.PORT || 4000;
app.listen(port, () =>console.log(`port ${port}`)  )
