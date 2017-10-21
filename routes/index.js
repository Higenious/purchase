var express    = require('express');
var router     = express.Router();
var csrf       = require('csurf');
var passport   = require('passport');
var Products   = require('../models/products');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Products.find(function (err, docs) {
      var producChunks = [];
      var chunkSize = 3;
      for(var i= 0; i<docs.length; i+= chunkSize){
        producChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shop/index', { title: ' Shopping Card',  products : chunkSize });

  });
});


router.get('/user/signup', function (req, res, next) {
    res.render('user/signup',{csrfToken :req.csrfToken()});

});

router.post('/user/signup', passport.authenticate('local-signup', {
    successRedirect:'/user/profile',
    failureRedirect:'/user/signup',
    failureFlash :true
}));

router.get('/user/profile', function (req, res, next) {
    res.render('user/profile');

});


module.exports = router;
