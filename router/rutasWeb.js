const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
  })
  router.get('/formacion', (req, res) => {
    res.render('formacion')
  })
  
  router.get('/experiencia', (req, res) => {
    res.render('experiencia')
  })
module.exports = router;  
  