'use strict';

var strURL = 'https://www.random.org/strings/?num=10&len=8&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new';
var intURL = 'https://www.random.org/integers/?num=10&min=1&max=6&col=2&base=10&format=plain&rnd=new';

function reqXHR(url) {

  return new Promise(function(response, error) {
    var XMLHttp = new XMLHttpRequest();
    XMLHttp.onreadystatechange = function() {

      if (XMLHttp.readystate === 4 && XMLHttp.status === 200) {

        var outcome = XMLHttp.responseText;
        response(outcome);
      } else {

        error('Failed to contact server.');
      }
    };

    XMLHttp.open('GET', url, true);
    XMLHttp.send();
  }).then(function(data) {
    
    return data;
  });
}

module.exports = {

  randomString: function(generateX, allowDigits, allowUpper, allowLower, eachUnique) {

  }
};
