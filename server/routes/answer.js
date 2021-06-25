const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:score', (req, res) => {
  db.getAnswer(req.params.score)
    .then(answer => {
      res.json(answer)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
