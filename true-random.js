'use strict';
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var strURL = 'https://www.random.org/strings/?num=$2&len=$1&digits=$3&upperalpha=$4&loweralpha=$5&unique=$6&format=plain&rnd=new';
var intURL = 'https://www.random.org/integers/?num=10&min=1&max=6&col=2&base=10&format=plain&rnd=new';

function get(url) {

  return new Promise(function(resolve, reject) {

    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {

      if (req.status === 200) resolve(req.responseText);
      else reject(Error(req.statusText));
    };

    req.onerror = function() {
      reject('Network Error');
    };

    req.send();
  });
  // .then(function(data) {
  //
  //   return data;
  // }).catch(function(err) {
  //
  //   return err;
  // });
}

module.exports = {

  randomString: function(length, generateX, allowUpper, allowLower, allowDigits, eachUnique) {

    var outcomeStr = strURL;
    outcomeStr = outcomeStr
    .replace('$1', length)
    .replace('$2', generateX || 1)
    .replace('$3', allowDigits ? 'on' : 'off')
    .replace('$4', allowUpper  ? 'on' : 'off')
    .replace('$5', allowLower  ? 'on' : 'off')
    .replace('$5', eachUnique  ? 'on' : 'off');

    get(outcomeStr)
    .then(function(data) {

      console.log(data.split('\n'));
      return data.split('\n');
    });
  }
};
