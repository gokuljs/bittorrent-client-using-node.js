'use strict'; //With strict mode, you can not, for example, use undeclared variables.
// normally torrent uses bencode format so know we are importing the becode 

const fs = require('fs'); // package used for interacting with file
const tracker = require("./tracker")

const bencode = require("bencode");
const dgram = require("dgram"); // implementing udp datagram sockets
const buffer = require("buffer").Buffer;
const urlParse = require('url').parse; //url parse method easily extracts diffrent parts of url like protocol ,url,hostname

const torrent = bencode.decode(fs.readFileSync('test.torrent')); // read file sync is used to read contents of the file 
// torrent = bencode.decode(torrent);
console.log(torrent)
console.log(torrent.announce.toString('utf8')); // this url is called has as an tracker url
// read file sync gives the output in buffer converting it into an standard format utf8
// normally netwrok messages are sent and read through buffers


const socket = dgram.createSocket('udp4'); // we are passing udp4 datagram socket because we are trying ipv4 address form
// 4
const myMsg = Buffer.from('hello?', 'utf8'); // we are converting a string of standard utf8 to buffer 
// 5
socket.send(myMsg, 0, myMsg.length, url.port, url.host, () => {}); // normally this is used for  sending messages 
// your passing the buffer message 
//second argument is it is senbding from argument 0 to total length of the message)
// last two represents the port number which it should be sent and the receivers host 
// last one is call back it tells how to handle incoming messages 
socket.on('message', msg => {
    console.log('message is', msg);
});