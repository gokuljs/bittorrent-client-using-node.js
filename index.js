'use strict'; // "use strict"; Defines that JavaScript code should be executed in "strict mode".
//With strict mode, you can not, for example, use undeclared variables.
const fs = require('fs'); //The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const torrent = fs.readFileSync('puppy.torrent'); //readFileSync is the easiest way to read the contents of a file
console.log(torrent);