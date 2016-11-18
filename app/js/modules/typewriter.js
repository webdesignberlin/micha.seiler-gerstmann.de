'use strict';

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
    }
  }

  typeWriter(text, 0);
};
