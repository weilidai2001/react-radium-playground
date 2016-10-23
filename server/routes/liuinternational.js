const express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');

const router = express.Router();

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());
router.use(compression());

const PropertiesDao = require('../properties-dao');
const propertiesDao = new PropertiesDao();

module.exports = function() {
  router.get('/properties', (req, res) => {
    res.send(propertiesDao.getState());
  });

  router.put('/properties/:id', (req, res) => {
    propertiesDao.updatePropertyById(req.params.id, req.body);
    res.send({status: 'OK'});
  });

  router.post('/properties', (req, res) => {
    res.send({
      status: 'OK',
      id: propertiesDao.insertProperty(req.body)
    });
  });

  return router;
};