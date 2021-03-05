'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('test.torrent');
console.log(torrent.toString('utf8'));