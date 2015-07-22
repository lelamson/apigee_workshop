'use strict';

var request = require('request');

module.exports = {
  getHotels: getHotels
};

function getHotels (req, res) {
  var apikey = process.env.EXPEDIA_APP_KEY;
  var location = req.swagger.params.location.value;
  var options = {
    'url': 'http://terminal2.expedia.com:80/x/hotels?maxhotels=10&radius=5mi&location=' + location,
    'headers': {
      'Authorization': 'expedia-apikey key=' + apikey
    }
  };
  request(options, function (error, response, body) {
    if (error) {
      res.send(error);
    } else {
      res.json(JSON.parse(body));
    }
  });
}
