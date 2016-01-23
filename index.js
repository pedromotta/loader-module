var logger = require('./logger');
var restClient = require('./lib/rest-client');

var LoaderModule = function() {

  this.helloWorld = function() {
    return 'Hello, module! - v4';
  };

  this.get = function(param, callback) {
    callback = callback || function(err, body) {
      if (err) {
        logger.error('err restClient: ', err);
      }

      logger.info('res restClient: ', body);
    };

    restClient.get(param, callback);
  };

};

module.exports = new LoaderModule();
