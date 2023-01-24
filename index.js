const express = require('express');
const app = express();
const path = require('path')

const PORT = 5000;

const staticPath = (path.join(__dirname,'../public'));


app.use(express.static(staticPath));

app.get('/', (req,res) => {
    res.sendFile('index.html');

})

app.listen(PORT,() => {
    console.log('Running on the port:');
})
