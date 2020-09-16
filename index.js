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

 const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
 console.log(torrent.announce.toString('utf8'));