var request = require('request');
module.exports.query = function (name, callback) {
  request('https://poloniex.com/public?command=returnTicker', function(err, response, body) {
    if (!err && response.statusCode == 200) {
      var json = JSON.parse(body);
      var symbol = translate_name_to_poloniex_symbol(name);
      var rate = json[symbol].last;
      //console.log('poloniex rate: ' + last);
      callback(rate);
    }
    else {
      console.log(err);
      callback();
    }
  });
};

function translate_name_to_poloniex_symbol(name) {
  if (name == 'ETHETC') {
    return 'ETH_ETC';
  }
  if (name == 'BTCETH') {
    return 'BTC_ETH';
  }
  if (name == 'BTCLTC') {
    return 'BTC_LTC';
  }
}
