const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);


routes.get('/search', SearchController.index);
routes.put('/search', SearchController.update);
routes.delete('/search/:github_username',SearchController.delete);

module.exports = routes;