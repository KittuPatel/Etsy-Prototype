const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/api/test', (req, res) => {
    res.send("Hello world test")
})

app.listen(3001, () => {
    console.log("Server listening on port 3001");
})
