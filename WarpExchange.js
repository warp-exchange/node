var unirest = require('unirest'),
    crypto = require('crypto'),
    qs = require('querystring');

let config = {
    apiKey: '.....eyuUWirZI5P02pePz.....',
};

var BASE_URL = 'https://api.warpexchange.com';

var WarpExchangeTrade = function () {
    this.apiKey = config.apiKey;
}

WarpExchangeTrade.prototype = {

    execute: function (method, parameters, res, callback) {
        
        var url_params = JSON.stringify(parameters);
        //console.log(url_params);

        unirest.post(BASE_URL + method)
          .headers('authorizationToken', this.apiKey)
          .headers('Content-Type', 'application/json')
          .send(url_params)
          .end(function (response) {
              if (response.raw_body) {
                  callback(null, JSON.parse(response.raw_body));
              }
              else {
                  callback(response);
              }
          });
    }
}

var WarpExchange = {
    WarpExchangeTrade: new WarpExchangeTrade(),

    getnewaddress: function (params, callback) {
        //console.log(params);
        this.WarpExchangeTrade.execute('/getnewaddress', params, console.log, callback);
    },
    gettransactioninformation: function (params, callback) {
        //console.log(params);
        this.WarpExchangeTrade.execute('/gettransactioninformation', params, console.log, callback);
    },
    gettransactions: function (callback) {
        this.WarpExchangeTrade.execute('/gettransactions', null, console.log, callback);
    },
    ToBTC: function (value, callback) {
        return value / 100000000;
    }
};

module.exports = WarpExchange;