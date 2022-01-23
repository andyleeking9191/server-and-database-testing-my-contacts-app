const express = require('express');
const app = express();
const path = require('path');
const port = 5000;


const knex = require('knex')({
  client: 'pg',
  version: '12.9',
  connection: {
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : 'postgres',
    database : 'employees'
  }
});

let customers = [];
 
knex.select('*')
.from('employees')
.where({emp_no: '10001'})
.then((customersData) => {
  customers = customersData
})


app.get('/users', (req, res) => {
  res.send(customers)
} )



app.listen(port, ()=> {
    console.log(`The server is listening on port ${port}.`)
})