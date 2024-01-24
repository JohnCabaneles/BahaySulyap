const express = require('express');
const app = express();
const port = 4000;

// app.get('/',(req,res) => {
//     res.send('Welcome to Bahay Sulyap');
// });

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.listen(port, () => console.info(`Listening on port ${port}`))