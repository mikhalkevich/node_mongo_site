var express = require('express');
var router = express.Router();
 

router.get('/add/',function(req,res,next){
//собираем данные для вставки в BD
		json1 = {
		 name: 'Услуги',
		 body: 'Разработка сайтов под ключ',
		 url:  'services',
		};
 
		json2 = {
		 name: 'Контакты',
		 body: 'Михалькевич Александр Викторович MTC +375(29)763-93-82',
		 url:  'contacts',
		};
 
		json3 = {
		 name: 'Добро пожаловать на мой сайт сайт',
		 body: 'http://mikhalkevich.colony.by',
		 url:  'index',
		};
 
// конец сбора данных
	var Themas = require('../models/themas').Themas;
// вставка данных
	var themas1 = new Themas(json1);	themas1.save();
	var themas2 = new Themas(json2);	themas2.save();
	var themas3 = new Themas(json3);	themas3.save();
// перенаправление
	res.redirect('/');
});

router.get('/:id?', function(req, res, next) {
	if(req.params.id){
	 tit = req.params.id;
	}else{
	 tit = 'Новости';
	} 
  res.render('news', { title: tit });
});
module.exports = router;