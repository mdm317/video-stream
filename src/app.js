const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use('/videos',express.static(__dirname + '/videos'));
app.use('/videoDash',express.static(__dirname + '/videoDash'));
// app.use(express.static('src'));

app.get('/hls', (req, res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/dash', (req, res) =>{
  res.sendFile(path.join(__dirname + '/index2.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
