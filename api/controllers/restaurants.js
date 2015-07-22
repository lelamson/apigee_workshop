'use strict';

var request = require('request');

module.exports = {
  getRestaurants: getRestaurants,
  getReviews: getReviews
};

function getRestaurants (req, res) {
  request('https://api.usergrid.com/lamson/sandbox/restaurants?limit=999', function (err, response, body) {
    if (err) {
      res.send(err);
    } else {
      res.send(body);
    }
  });
}

function getReviews (req, res) {
  var restID = req.swagger.params.id.value;
  request("http://api.usergrid.com/lamson/sandbox/reviews?limit=999&ql=restID=" + restID, function (err, resp, body) {
    if (err) {
      res.send(err);
    } else {
      res.send(body);
    }
  });
}
