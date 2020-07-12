const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json({ extended:false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex:true}
);

const connection = mongoose.connection;
connection.once('open' ,() => {
    console.log("Mongodb connection is established successfullly");
})

// Define Routes
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
// const contactsRoute = require('./routes/contacts');



app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
// app.use('/api/contacts',contactsRoute);


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});