var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	if(req.params.id){
	 tit = req.params.id;
	}else{
	 tit = 'Новости';
	} 
  res.render('news', { title: tit });
});
router.get('/add/:url',function(req,res,next){
	if(req.params.url){
	 url = req.params.url;
	}else{
	 url = 'url';
	}
	var Themas = require('../models/themas').Themas;
	var themas = new Themas({
	 name: 'Услуги',
	 body: 'Разработка сайтов под ключ',
	 url:  url,
	});
	themas.save(function(err, user, affected){
		 console.log('Ok');
	});
	var red = '/'+url;
	res.redirect(red);
});

module.exports = router;