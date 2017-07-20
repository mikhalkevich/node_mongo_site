var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	if(req.params.id){
	 tit = req.params.id;
	}else{
	 tit = 'index';
	}

  var Themas = require('../models/themas').Themas;
        Themas.findOne({'url':tit}, function(err, ttext){
           if(!ttext){
               ttext = {
                   name:'Home page',
                   body:'Welcome to the site'
               }
           }
	console.log(ttext);
  res.render('index', { ttext: ttext });
});
});

module.exports = router;
