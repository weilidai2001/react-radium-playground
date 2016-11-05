const express = require('express');
var bodyParser = require('body-parser');
var appRoot = require('app-root-path');
var compression = require('compression');
var fileUpload = require('express-fileupload');
var assetsDao = require('../dao/assets-dao');

const router = express.Router();

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());
router.use(compression());
router.use(fileUpload());


module.exports = function() {
  router.post('/assets', function(req, res) {
    if (!req.files) {
      res.send('No files were uploaded.');
      return;
    }

    const getExtension = name => name.split('.').pop();

    const uploadedFile = req.files[0];
    const newFilePath = `${appRoot}/uploads/${Date.now()}.${getExtension(uploadedFile.name)}`;

    uploadedFile.mv(newFilePath, function(err) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        assetsDao.saveAsset(newFilePath).then(downloadUrl => {
          res.send({
            status: 'OK',
            url: downloadUrl
          });
        })
      }
    });
  });

  return router;
};