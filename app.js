const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes=require('./routes/admin');
app.use('/admin',adminRoutes);

const userRoutes=require('./routes/user');
app.use(userRoutes);



app.listen(3000,()=>{
    console.log("listening on port 3000");
});
