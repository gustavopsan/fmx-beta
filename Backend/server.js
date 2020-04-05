const express = require('express');
const bodyParser = require('body-parser');
const sql = require('./database.js');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1> Server is running </h1>');
});

app.get('/fm_xxx/:data', (req, res) => {
    let data = req.params.data;
    
    sql.query(`SELECT * FROM fmxxx where date= '${data}'`, (error, results, fields) => {
        if (error) throw error;
        return res.send({data: results[0]});
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});