'use strict';

var request = require('request');

module.exports = {
  getRestaurants: getRestaurants
};

function getRestaurants (req, res) {
  request('https://api.usergrid.com/lamson/sandbox/restaurants', function (error, response, body) {
    if (error) {
      res.send(error);
    } else {
      var results = {};
      results.entities = JSON.parse(body).entities;
      res.json(results);
    }
  });
}
