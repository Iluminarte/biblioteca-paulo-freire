const express = require('express');
const request = require('request');
const site = express();
const livrosJSON = require('./livros.js').all;
const port = process.env.PORT || 8080

site.use(express.static('public'));
site.set('view engine', 'ejs');

site.get('/api/livros/acervo', (req, res) => {
	livrosJSON.then(result => res.json(result));
});

site.get('/', (req, res) => {
	const apiPath = `${req.protocol}://${req.get('host')}/api/livros/acervo`;

	request(apiPath, (error, response, body) => {
		res.render('pages/index', {
			livros: JSON.parse(body)
		});
	});
});

site.listen(port);
