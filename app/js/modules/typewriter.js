'use strict';

var scrollIt = require('./srollit').scrollIt;

module.exports = function() {
  var typewriterElement = document.getElementById('js-typewriter');
  var text = typewriterElement.getAttribute('data-text');
  var helperHeight = typewriterElement.offsetHeight;

  /* Prevent Reflow if typewriterElement types over one line */
  typewriterElement.style.minHeight = helperHeight + 'px';

  function typeWriter(text, n) {
    if (n < (text.length)) {
      var textSubstring = text.substring(0, n+1);
      typewriterElement.innerHTML = textSubstring;

      n++;
      setTimeout(function() {
        typeWriter(text, n);
      }, 100);
    } else {

      var trigger = document.querySelectorAll('#js-typewriter a');
      var sections = document.querySelectorAll('article');
      var done = function done() {
        //console.log('done');
      };

      if (trigger[0]){
        trigger[0].addEventListener('click', function () {
          scrollIt(sections[0], 300, 'easeInQuad', done);
        });
      }

    }
  }

  typeWriter(text, 0);
};
