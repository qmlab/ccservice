var krclient = require('./kraken-client.js');
var ssclient = require('./shapeshift-client.js');
var plclient = require('./poloniex-client.js');

krclient.query('ETCETH', function(krrate) {
  ssclient.query('etc_eth', function(ssrate) {
    plclient.query('ETHETC', function(plrate) {
      console.log('krrate: ' + krrate);
      console.log('ssrate: ' + ssrate);
      console.log('plrate: ' + plrate);
      var max = Math.max(krrate, Math.max(ssrate, plrate));
      var min = Math.min(krrate, Math.min(ssrate, plrate));
      var variance = (max - min) / min;
      console.log('ETC/ETH variance: ' + variance);
    });
  });
});

/*
krclient.query('ETHXBT', function(krrate) {
  ssclient.query('eth_btc', function(ssrate) {
    var variance = (krrate - ssrate) / ssrate;
    console.log('ETH/BTC variance: ' + variance);
  });
});

krclient.query('LTCXBT', function(krrate) {
  ssclient.query('ltc_btc', function(ssrate) {
    var variance = (krrate - ssrate) / ssrate;
    console.log('LTC/BTC variance: ' + variance);
  });
});
*/
