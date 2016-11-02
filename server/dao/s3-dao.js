'use strict';
var AWS = require('aws-sdk');
var s3bucket = new AWS.S3();
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

module.exports = {
  saveState(project, key, json){
    return new Promise((resolve, reject) => {
      const timestampedKey = `state/${key}/${Date.now()}`;
      var params = {Bucket: project, Key: timestampedKey, Body: JSON.stringify(json)};

      s3bucket.putObject(params, function (err) {
        if (err) {
          console.error(err);
          reject(err)
        } else {
          resolve()
        }
      });
    });
  },
  getState(project, key){
    return new Promise((resolve, reject) => {
      const keyPrefix = `state/${key}/`;
      s3bucket.listObjects({Bucket: project, Prefix: keyPrefix}, function (err, data) {
        if (err) {
          console.error(err);
          reject(err)
        } else {
          const key = _.last(_.sortBy(data.Contents.map(_ => _.Key)));

          s3bucket.getObject({Bucket: project, Key: key}, function (err, data) {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(JSON.parse(data.Body.toString()));
            }
          });
        }
      });
    });
  },
  saveAsset(project, fileName){
    return new Promise((resolve, reject) => {
      const timestampedKey = `asset/${Date.now()}${path.extname(fileName)}`;

      const file = fs.createReadStream(fileName);

      const downloadUrl = `https://${project}.s3.amazonaws.com/${timestampedKey}`;
      var params = {Bucket: project, Key: timestampedKey, Body: file, ACL: 'public-read'};

      s3bucket.upload(params)
        .send(
        function (err) {
          if (err) {
            console.error(err);
            reject(err)
          } else {
            resolve(downloadUrl)
          }
        });
    });
  }
};