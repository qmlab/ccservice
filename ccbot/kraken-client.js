var KrakenClient = require('kraken-api');
var kraken = new KrakenClient('abc', 'def');

// Get Ticker Info
module.exports.query = function (name, callback) {
  kraken.api('Ticker', {"pair": name}, function(error, data) {
      if(error) {
        console.log(error);
        callback();
      }
      else {
        var symbol_name = translate_name_to_kraken_symbol(name);
        var rate = data.result[symbol_name].c[0];
        //console.log(name);
        //console.log('kraken rate: ' + rate);
        callback(rate);
      }
  });
};

function translate_name_to_kraken_symbol (name) {
  if (name == 'ETCETH') {
    return 'XETCXETH';
  }
  if (name == 'ETHXBT') {
    return 'XETHXXBT';
  }
  if (name == 'LTCXBT') {
    return 'XLTCXXBT';
  }
}
