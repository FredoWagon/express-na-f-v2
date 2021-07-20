var express = require('express');
var router = express.Router();
const { sendMessage } = require('../lib/nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/bio', function (req, res, next) {
  res.render('bio');
});

router.get('/contact', function (req, res, next) {

  res.render('contact')
})

router.post('/contact', function (req, res, next) {
  console.log(req.body)
  sendMessage();
})

module.exports = router;
