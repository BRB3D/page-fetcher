const request = require('request');
const fs = require('fs');
const vars = process.argv.slice(2);

const fetch = function(url, localPath) {
  if (url === undefined || localPath === undefined || url.length  === 0 || localPath.length === 0) {
    return `you have to input a correct Url or a correct path file`;
  }
  request(url, (error, response, body) => {
    fs.open(localPath, "a", (err, fd) => {
      if (err) {
        console.log(err.message);
      } else {
        fs.write(fd, body,{ flag: 'w+' }, (err, bytes)=>{
          if (err) {
            console.log(err.message);
          } else {
            console.log(`Downloaded and saved ${bytes} bytes to ${localPath}`);
          }
        });
      }
    });
  });
};


fetch(vars[0], vars[1]);

