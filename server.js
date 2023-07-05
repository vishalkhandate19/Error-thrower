const express = require('express');
const cors = require('cors');
const app = express();
var fs = require('fs');


app.use(cors({
    origin: "*"
}))

app.get('/api/error/:status',(req,res)=>{
    const status= req.params.status
    setTimeout(function() {
    res.set('Timing-Allow-Origin','*');
    res.set('Access-Control-Expose-Headers','*');
        res.status(status).send(`Status ${status}`);
    }, 1000); 

});

// app.post('/api/error/:status',(req,res)=>{
//     const status= req.params.status
//     setTimeout(function() {
//     res.set('Timing-Allow-Origin','*');
//     res.set('Access-Control-Expose-Headers','*');
//     res.status(status).send(`Status ${status}`);
// }, 1000); 

// });


// app.get('/api/error/500/:uuid',(req,res)=>{
//         res.status(500).send(`OK `);
// });

// app.get('/api/error/:time/:status',(req,res)=>{
//     const time = req.params.time
//     const status= req.params.status
//     setTimeout(function() {
//         res.set('Timing-Allow-Origin','*');
//         res.set('Access-Control-Expose-Headers','*');
//         res.status(status).send(`Status ${status}`);
//     }, time); 
// });

// app.post('/api/error/:time/:status',(req,res)=>{
//     const time = req.params.time
//     const status= req.params.status
//     setTimeout(function() {
//         res.set('Timing-Allow-Origin','*');
//         res.set('Access-Control-Expose-Headers','*');
//         res.status(status).send(`Status ${status}`);

//     }, time); 
// });

// app.get('/api/error/:time/:status/:size',(req,res)=>{
//     const time = req.params.time
//     const status= req.params.status
//     const size= req.params.size

//     setTimeout(function() {
//         const responseSize = size * 1024; 
//         const responseString = generateString(responseSize);
//         res.set('Timing-Allow-Origin','*');
//         res.set('Access-Control-Expose-Headers','*');
//         res.status(status).send(`Status ${status} ${responseString}`);
//     }, time); 
// });


// app.post('/api/error/:time/:status/:size',(req,res)=>{
//     const time = req.params.time
//     const status= req.params.status
//     const size= req.params.size

//     setTimeout(function() {
//         const responseSize = size * 1024; 
//         const responseString = generateString(responseSize);
//         res.set('Timing-Allow-Origin','*');
//         res.set('Access-Control-Expose-Headers','*');
//         res.status(status).send(`Status ${status} ${responseString}`);
//     }, time); 
// });

//f
app.get('/api/error',(req,res)=>{
    setTimeout(function() {
        const responseSize = 100 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(404).send(`Status ${404} ${responseString}`);
    }, 1000); 
});

//f
app.post('/api/error',(req,res)=>{
    setTimeout(function() {
        const responseSize = 500 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(402).send(`Status ${404} ${responseString}`);
    }, 5000); 
});

//p
app.get('/api/user',(req,res)=>{
    setTimeout(function() {
        const responseSize = 1000 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(203).send(`Status ${202} ${responseString}`);
    }, 300); 
});

//p
app.post('/api/user',(req,res)=>{
    setTimeout(function() {
        const responseSize = 10 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(200).send(`Status ${202} ${responseString}`);
    }, 1200); 
});

//m
app.get('/api/getDetails',(req,res)=>{
    setTimeout(function() {
        const responseSize = 800 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(202).send(`Status ${202} ${responseString}`);
    }, 1100); 
});

//p
app.get('/api/user/search',(req,res)=>{
    setTimeout(function() {
        const responseSize = 50 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(203).send(`Status ${202} ${responseString}`);
    }, 1000); 
});

//p
app.post('/api/user/search',(req,res)=>{
    setTimeout(function() {
        const responseSize = 100 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(203).send(`Status ${202} ${responseString}`);
    }, 200); 
});

//m
app.get('/api/addUser',(req,res)=>{
    setTimeout(function() {
        const responseSize = 100 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(202).send(`Status ${202} ${responseString}`);
    }, 100); 
});

//m
app.post('/api/addUser',(req,res)=>{
    setTimeout(function() {
        const responseSize = 300 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(202).send(`Status ${202} ${responseString}`);
    }, 6000); 
});

//f
app.get('/api/activity',(req,res)=>{
    setTimeout(function() {
        const responseSize = 10 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(404).send(`Status ${202} ${responseString}`);
    }, 4500); 
});

//f
app.post('/api/activity',(req,res)=>{
    setTimeout(function() {
        const responseSize = 30 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(404).send(`Status ${202} ${responseString}`);
    }, 600); 
});

//m
app.get('/api/customerId',(req,res)=>{
    setTimeout(function() {
        const responseSize = 1110 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(502).send(`Status ${202} ${responseString}`);
    }, 500); 
});

//m
app.post('/api/customerId',(req,res)=>{
    setTimeout(function() {
        const responseSize = 301 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(202).send(`Status ${202} ${responseString}`);
    }, 600); 
});

//m
app.get('/api/getCustomerDetails ',(req,res)=>{
    setTimeout(function() {
        const responseSize = 10 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(401).send(`Status ${202} ${responseString}`);
    }, 500); 
});

//m
app.post('/api/addCustomerDetails ',(req,res)=>{
    setTimeout(function() {
        const responseSize = 30 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(202).send(`Status ${202} ${responseString}`);
    }, 1000); 
});

//m
app.get('/api/login ',(req,res)=>{
    setTimeout(function() {
        const responseSize = 30 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(403).send(`Status ${202} ${responseString}`);
    }, 100); 
});

//m
app.post('/api/signUp ',(req,res)=>{
    setTimeout(function() {
        const responseSize = 530 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(402).send(`Status ${202} ${responseString}`);
    }, 3000); 
});

//m
app.post('/api/public',(req,res)=>{
    setTimeout(function() {
        const responseSize = 30 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(202).send(`Status ${202} ${responseString}`);
    }, 1100); 
});

//m
app.get('/api/public',(req,res)=>{
    setTimeout(function() {
        const responseSize = 310 * 1024; 
        const responseString = generateString(responseSize);
        res.set('Timing-Allow-Origin','*');
        res.set('Access-Control-Expose-Headers','*');
        res.status(202).send(`Status`);
    }, 100); 
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
