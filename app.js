const app = require('express')();
const morgan = require('morgan');
const nodeFetch = require('node-fetch');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
require('dotenv').config()

mongoose.connect('mongodb+srv://katrin:123@cluster0.afr5i.mongodb.net/Beavers', { useNewUrlParser: true, useUnifiedTopology: true });


function setHeaders(req, res, next) {
    // даем доступ всем подряд 
    res.header('Access-Control-Allow-Origin', '*')
    next()
}
app.use(setHeaders);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dog.html'))
});

app.get('/weather', async (req, res) => {
    const response = await nodeFetch('https://www.metaweather.com/api/location/44418/2013/4/27/');
    const result = await response.json();
    // const user = await User.findOne({});
    res.json({ weather : result[0] })
});

app.listen(process.env.PORT || 4200, () => console.log('listen'))