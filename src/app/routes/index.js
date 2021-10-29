const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Rota get');
});

module.exports = routes;