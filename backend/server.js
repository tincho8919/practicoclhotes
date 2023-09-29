
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
const db = mysql.createConnection({
    host: process.env.HOSTDATA,
    user: process.env.USERDATA,
    password: process.env.PASSDATA,
    port: process.env.PORTDATA,
    database: process.env.DATABASE
});





db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

app.post('/register', (req, res) => {
    const formData = req.body;

    const sql = 'INSERT INTO users (username, email, password, age, dob, sex, country, province, locality, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [
        formData.username,
        formData.email,
        formData.password,
        formData.age,
        formData.dob,
        formData.sex,
        formData.country,
        formData.province,
        formData.locality,
        formData.description
    ], (err, result) => {
        if (err) {
            console.error('Error al registrar: ' + err.message);
            res.status(500).send('Error al registrar el usuario');
        } else {
            console.log('Registro exitoso:', result);
            res.status(200).send('Registro exitoso');
        }
    });
});

app.listen(port, () => {
    console.log('Servidor en ejecución en el puerto ' + port);
});

