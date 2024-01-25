const path = require('path');
const express = require('express');
const app = express();
const port = 4000;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


// Static Routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})


app.listen(port, () => console.info(`Listening on port ${port}`))