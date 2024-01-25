
const path = require('path')
const express = require('express');
const app = express();
const port = 4000;

//middleware & static files
app.use(express.static('public'));

// routes
app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})




app.listen(port, () => console.info(`Listening on port ${port}`))