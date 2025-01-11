var routes = require('express').Router();
const lesson1controller = require('../controllers/001-express-tutorial');

routes.get('/nunes', lesson1controller.nunes);
routes.get('/souza', lesson1controller.souza);

module.exports = routes;