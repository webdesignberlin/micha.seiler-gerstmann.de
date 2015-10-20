'use strict';
var WebFont = require('webfontloader');
var initTypeWriter = require('./typewriter');

module.exports = function(){

  WebFont.load({
    google: {
      families: [ 'Merriweather:300:latin', 'Oswald::latin' ]
    },
    fontactive: function(fontFamily, fvd) {
      if(fontFamily === 'Oswald'){
        initTypeWriter();
      }
    }
  });

};
