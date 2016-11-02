'use strict';

const s3 = require('./s3-dao');
const fs = require('fs');
const PROJECT_NAME = 'liuinternational';

module.exports = {
  saveAsset (filePath) {
    return s3.saveAsset(PROJECT_NAME, filePath).then(url => {
      fs.unlinkSync(filePath);
      return url;
    });
  }
};