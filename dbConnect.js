require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = 5000;


const knex = require('knex')({
  client: 'pg',
  version: '12.9',
  connection: {
    host : `${process.env.HOST}`,
    port : `${process.env.PORT}`,
    user : `${process.env.DATABASE_USER}`,
    password : `${process.env.DATABASE_PASSWORD}`,
    database : `${process.env.DATABASE}`
  }
});

let profiles = [];
 
knex.select('*')
.from('profile')
.then((profilesData) => {
  profiles = profilesData
})


app.get('/users', (req, res) => {
  res.send(profiles)
} )



app.listen(port, ()=> {
    console.log(`The server is listening on port ${port}.`)
})