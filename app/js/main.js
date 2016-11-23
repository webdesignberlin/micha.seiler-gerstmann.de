'use strict';

var mailProtection = require('./modules/mail-protect');
mailProtection.mailProtection();

var fontLoader = require('./modules/font-loader');
fontLoader(document);

var addJSClass = require('./modules/no-js');
addJSClass.addJSClass();

//var asyncImages = require('./modules/async-images');
//asyncImages.asyncImages();
