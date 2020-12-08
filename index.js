// building a bittorrent client from scratch 
'use strict'; // means we are using strict mode to run the javascript file 
const fs = require("fs"); // fs is the one of the file module in node.js which helps you to interact with the file system 
const torrent_test = fs.readFileSync('test.torrent'); //fs.readFilesync is going to read contents from the file which is present inside the new.torrent fiel  
const bencode = require("bencode");
// console.log(torrent)normally when you readfile sync it will return yout the buffer codes 
// now we want to conver this to buffer code to utf8 standard and print it out
// console.log(torrent_test.toString('utf8'));
// In node.js a buffer is a container for raw bytes. A byte just means eight bits, and a bit is just a 0 or a 1. So a byte might look like 10101010
// bencode is a data serilization format mostly used into bittorrent
const torrent = bencode.decode(fs.readFileSync('test.torrent'));
console.log(torrent) // if you observe this all the decoded object files are buffer code in the torrent 
    // printing it out in normal string 
console.log("this is also called as tracker url ", torrent.announce.toString('utf8')); //