'use strict';

const fs = require('fs'); // using file sync modules in fs
const bencode = require('bencode'); // importing benocode package in node js 
const tracker = require('./tracker'); // importing tracker.js files in the module 

const torrent = bencode.decode(fs.readFileSync('test.torrent'));

tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers);
});