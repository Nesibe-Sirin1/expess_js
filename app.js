const express = require('express');
const app = express();
const path=require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes=require('./routes/admin');
app.use('/admin',adminRoutes);

const userRoutes=require('./routes/user');
app.use(userRoutes);

app.use((req,res) =>{
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});
