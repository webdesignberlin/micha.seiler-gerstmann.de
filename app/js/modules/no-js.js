'use strict';

function addJSClass(){
  var docElement = document.documentElement;
  var className = docElement.className;
  var classPrefix = '';
  var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');

  className = className.replace(reJS, '$1' + classPrefix + 'js$2');
  docElement.className = className;
}
module.exports = {
  addJSClass: addJSClass
};
