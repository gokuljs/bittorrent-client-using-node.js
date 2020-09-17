 // "use strict"; Defines that JavaScript code should be executed in "strict mode".
 //With strict mode, you can not, for example, use undeclared variables.
 //The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
 //Bencode (pronounced like B encode) is the encoding used by the peer-to-peer file sharing system BitTorrent for storing and transmitting loosely structured data.
 // const torrent = fs.readFileSync('puppy.torrent');//readFileSync is the easiest way to read the contents of a file
 // readfilesync always written a buffer 
 // normally netwroking messages are sent using buffers
 // if u want to see how the buffer messages are
 // console.log(torrent) 
 // console.log(torrent.toString('utf8'));
 // Bencoding
 // Bencoding is a way to specify and organize data in a terse format. It supports the following types: byte strings, integers, lists, and dictionaries.
 'use strict';
 const fs = require('fs');
 const bencode = require('bencode');
 const dgram = require('dgram');
 //  The dgram module provides an implementation of UDP(user datagram protocol)datagram sockets.
 const Buffer = require('buffer').Buffer; //Buffer objects are used to represent a fixed-length sequence of bytes. Many Node.js APIs support Buffers.
 //The Buffer class is a subclass of JavaScript's Uint8Array class and extends it with methods that cover additional use cases. Node.js APIs accept plain Uint8Arrays wherever Buffers are supported as well.
 const urlParse = require('url').parse; //I use the url module’s parse method on our tracker url. This lets me easily extract different parts of the url like its protocol, hostname, port, etc.

 const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
 // 2
 const url = urlParse(torrent.announce.toString('utf8'));

 // 3
 const socket = dgram.createSocket('udp4'); // creating an udp socket ot udp4 or udp6
 // 4
 const myMsg = Buffer.from('hello?', 'utf8');
 // 5
 socket.send(myMsg, 0, myMsg.length, url.port, url.host, () => {});
 // 6
 socket.on('message', msg => {
     console.log('message is', msg);
 });