var express = require('express');
var router = express.Router();
const { sendMessage } = require('../lib/nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  const current_url = req.active = req.path.split('/')[1]
  res.render('index', { title: 'Express', current_url: current_url });
});


router.get('/bio', function (req, res, next) {
  const current_url = req.active = req.path.split('/')[1]
  res.render('bio', {current_url: current_url});
});

router.get('/contact', function (req, res, next) {
  const current_url = req.active = req.path.split('/')[1]

  res.render('contact', {current_url: current_url})
})

router.post('/contact', function (req, res, next) {

  sendMessage(req.body);
  res.status(200).json({ message: "c'est bon" })
})

router.get('/illustrations', function (req,res,next) {
  const current_url = req.active = req.path.split('/')[1]
  res.render('illustration',{current_url: current_url})
})

router.get('/murals', function (req,res,next) {
  const current_url = req.active = req.path.split('/')[1]
  res.render('mur',{current_url: current_url})
})

router.get('/canvas', function (req,res,next) {
  const current_url = req.active = req.path.split('/')[1]
  res.render('canva',{current_url: current_url})
})

module.exports = router;
