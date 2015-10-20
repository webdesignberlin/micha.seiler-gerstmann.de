'use strict';
var WebFont = require('webfontloader');

module.exports = function(){

  WebFont.load({
    google: {
      families: [ 'Merriweather:300:latin', 'Oswald::latin' ]
    }
  });

};
