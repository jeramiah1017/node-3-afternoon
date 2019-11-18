require ('dotenv').config()
const express = require('express')
const  massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const products_controller = require("./products_controller");

const app = express() 
app.use(express.json())

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);

massive(CONNECTION_STRING).then(
    data => { app.set('db', data)
    console.log('data is flowing')

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} germans above england`)) 
    })
