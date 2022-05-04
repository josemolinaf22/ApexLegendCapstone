const express = require('express');
const path = require('path');
const app = express();
const {legends} = require('../data.js')

const port = process.env.PORT || 4006

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
});
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/indexstyles.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.js'))
})

app.get('/api/legends',  (req, res) => {
    try {
        res.status(200).send(legends)
    } catch (error) {
        console.log('Error getting legends', error)
        res.sendStatus(400)
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})