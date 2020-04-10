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
    
    sql.query(`SELECT * FROM fmxxx where date= '${data}'`, (error, results) => {
        if (error) throw error;
        return res.send({data: results[0]});
    });
});

app.post('/auth', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    sql.query(`select * from users where login= '${username}'`, (error, results) => {
        if (error) {
            res.json({
                status:false,
                message: 'Erro inesperado na query da API: ', error
            })
        } else {
            if (results.length > 0) {
                if (password == results[0].password) {
                    res.json({
                        status: true,
                        message: 'Login bem sucedido!'
                    })
                } else {
                    res.json({
                        status: false,
                        message: 'Username e senha não deram match'
                    });
                }
            }
            else {
                res.json({
                    status: false,
                    message: 'Username não listado na nossa Base de Dados'
                });
            }
        }
        
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});