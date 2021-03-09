'use strict'; //With strict mode, you can not, for example, use undeclared variables.
// normally torrent uses bencode format so know we are importing the becode 
const bencode = require("bencode");
const fs = require('fs'); // package used for interacting with file
const torrent = bencode.decode(fs.readFileSync('test.torrent')); // read file sync is used to read contents of the file 
// torrent = bencode.decode(torrent);
console.log(torrent)
console.log(torrent.announce.toString('utf8')); // read file sync gives the output in buffer converting it into an standard format utf8
// normally netwrok messages are sent and read through buffers