'use strict';

function asyncImages(){
  [].forEach.call(
      document.getElementsByClassName('js-async-image'),function(e){
        var dataSrc = e.getAttribute('data-src');
        e.setAttribute('src', dataSrc);
      }
  );
}

module.exports = {
  asyncImages: asyncImages
};


