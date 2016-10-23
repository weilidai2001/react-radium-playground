const express = require('express');
const router = express.Router();

const PropertiesDao = require('../properties-dao');
const propertiesDao = new PropertiesDao();

module.exports = function() {
  router.get('/properties', (req, res) => {
    res.send(propertiesDao.getState());
  });

  return router;
};