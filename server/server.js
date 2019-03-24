const path = require('path');
const express = require('express');
const app = express();

//config for Heroku
const port = process.env.PORT || 3000;

//define folder to be used
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

//to redirect all page requests to index.html
app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

//open in the defined port
app.listen(port, () => {
    console.log('Server is up');
})