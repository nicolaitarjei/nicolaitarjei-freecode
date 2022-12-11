// Importing http module
const http = require("http")
  
// Creating Server
const tls = require('tls')
const https = require('live-server-https');
 
const server = tls.createServer(https, (socket) => {
  console.log('server connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('welcome!\n');
  socket.setEncoding('utf8');
  socket.pipe(socket);
});
server.listen(8000, () => {
  console.log('server bound');
});
  

var fs = require("fs");

module.exports = {
	cert: fs.readFileSync(__dirname + "/server.cert"),
	key: fs.readFileSync(__dirname + "/server.key"),
	passphrase: "12345"
};

