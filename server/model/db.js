require('dotenv').config();



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

module.exports = knex

