'use strict';

function mailProtection(){
  [].forEach.call(
      document.getElementsByClassName('js-mailto'),function(e){
        e.setAttribute('href','mailto:' + e.getAttribute('data-mailto-user') + '@' + (e.getAttribute('data-mailto-domain') || window.location.host)
        );
      }
  );
}

module.exports = {
  mailProtection: mailProtection
};
