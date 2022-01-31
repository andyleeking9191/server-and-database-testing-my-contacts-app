const express = require('express')
const knex = require('../model/db')
const router = express.Router()


router.get('/', (req, res) => {
    knex.select('*').from('profile').then(data => {
        res.json(data)
      })
})


module.exports = router