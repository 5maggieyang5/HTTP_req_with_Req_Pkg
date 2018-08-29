// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

// `request.get` is equivalent to `request()`
request.get('https://sytantris.github.io/http-examples/future.jpg')
  // `request.on('error', callback)` handles any error
  .on('error', function (err) {
    throw err;
  })
  // `request.on('response, callback)` handles the response
  .on('response', function (response) {
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Status Msg: ', response.statusMessage);
    console.log('Response Content Type: ', response.headers['content-type']);
    console.log('Downloading image...');
  })
  // `.pipe and fs.createWriteStream to save the file to working directory ('./future.jpg')
  .pipe(fs.createWriteStream('./future.jpg'))

  .on('finish', function(){
    console.log('Download complete.');
  });


