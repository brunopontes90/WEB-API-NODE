const routes = require('express').Router();
const get = require('./../controllers/get');
const post = require('./../controllers/post');
const put = require('./../controllers/put');
const del = require('./../controllers/delete');

routes.get('/', get);
routes.post('/create', post);
routes.put('/edit', put);
routes.delete('/delete', del);

module.exports = routes;