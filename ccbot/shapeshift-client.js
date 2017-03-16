var request = require('request');
module.exports.query = function (name, callback) {
  request('https://shapeshift.io/rate/' + name, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      var json = JSON.parse(body);
      var rate = json.rate;
      console.log('shapeshift rate: ' + rate);
      callback(rate);
    }
    else {
      console.log(err);
      callback();
    }
  });
};
