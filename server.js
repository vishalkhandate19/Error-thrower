const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors({
    origin: "*"
}))
app.get('/api/error/:status',(req,res)=>{
    const status= req.params.status
        res.status(status).send(`Status ${status}`);
});

const port= process.env.PORT || 4000;
app.listen(port, () =>console.log(`t ${port}`)  )
