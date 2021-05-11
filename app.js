const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api-product',(req,res)=>{
    res.send('Ürün listesi');
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});
