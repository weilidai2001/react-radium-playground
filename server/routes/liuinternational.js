const express = require('express');
const router = express.Router();

const PropertiesDao = require('../dao/properties-dao');
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