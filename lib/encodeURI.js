var iconv = require('iconv-lite');

var encodeURI = function(str, encoding) {
    if (!encoding || encoding == 'utf8' || encoding == 'utf-8') {
      return encodeURIComponent(str);
    }
    
    var buf = iconv.encode(str, encoding);
    var encoded = [];
    
    for (var pair of buf.entries()) {
      var value =  pair[1];
      // Test if value is unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~" https://tools.ietf.org/html/rfc3986#section-2.3
      if ((value >= 65 && value <= 90)  || // A-Z 
          (value >= 97 && value <= 122) || // a-z
          (value >= 48 && value <= 57)  || // 0-9
           value == 45 || value == 46    || // "-" / "."
           value == 95 || value == 126      // "_" / "~"      
      ) {
        encoded.push(String.fromCharCode(value));
      } else {
        var hex = value.toString(16).toUpperCase();
        encoded.push("%" + (hex.length === 1 ? '0' + hex : hex));
      }
    }
    return encoded.join("");
}

module.exports = encodeURI;
