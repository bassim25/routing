const express = require('express');
const app = express();

const {router:homeRouter } = require('./routes/home')
const {router:contactRouter } = require('./routes/contact')
const {router:servicesRouter } = require('./routes/services')

//I could have used express.static but i'm using the following method to familarize myself with working with 
//seperate files and modules.
app.use('/home',homeRouter)
app.use('/contact',contactRouter)
app.use('/services',servicesRouter)

//running the server
app.listen('3000', (err) => {
    if (err) console.log('Server is not running ! ')
    else console.log('Server is running on port : 3000');
});