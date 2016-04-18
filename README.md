# encodeURI.js

[![NPM](https://nodei.co/npm/encodeuricharenc.png?downloads=true&stars=true)](https://nodei.co/npm/encodeuricharenc/)

URI encoding with support for character encoding.

There are [other](https://www.npmjs.com/package/urlencode) URL [encoders](https://github.com/alsotang/urlencode) that supports character encoding but I couldn't find one that honors the Unreserved Characters in [RFC 3986](https://tools.ietf.org/html/rfc3986#section-2.3).

Uses [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition) features. Has been used with [AWS Lambda (v4.3.2)](http://docs.aws.amazon.com/lambda/latest/dg/programming-model.html).

## Install

```bash
$ npm install encodeuricharenc
```

## Usage
```javascript
  var encURI = require('encodeuricharenc');

  // The only encoding for encodeURIComponent() is UTF-8
  var str = "Smörgåsbord";
  var utf8Encoded = encodeURIComponent(str);
  
  // Sometimes you need another encoding
  var iso88591Encoded = encURI(str, 'iso-8859-1');

  console.log(utf8Encoded);     // Sm%C3%B6rg%C3%A5sbord
  console.log(iso88591Encoded); // Sm%F6rg%E5sbord
```

## TODO

* Decoding
* Tests
