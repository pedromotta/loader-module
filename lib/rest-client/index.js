var request = require('request');

var RestClient = function() {
  this.get = function(param, callback) {

    var url = 'http://jsonplaceholder.typicode.com/posts/' + param || '1';

    request.get(url, function(err, res, body) {
      callback(err, body);
    });
  };

  return this;
};

module.exports = new RestClient();
