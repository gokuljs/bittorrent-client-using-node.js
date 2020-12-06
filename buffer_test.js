// little bit about buffer in node.js
//In node.js a buffer is a container for raw bytes. A byte just means eight bits, and a bit is just a 0 or a 1. So a byte might look like 10101010
// simple example for buffers <Buffer 02 04 06 08 0a 0c 0e 10>
// for communicating between sockets buffer language is more reliable way of doing it 
// encoding
const Buffer = require('buffer').Buffer;

// const buf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72,

// ]);
// const buf = Buffer.from([10, 1000, 8080]);
// const buf = Buffer.from("building a bittorrent client")
// console.log(buf); // output will come in the form buffer 
// console.log(buf.toString('utf8'))

// Encodings work in “both directions”. That is, you can convert from a buffer to 
// a string and from a string to a buffer. 
// We already saw that converting to a string can be done with the toString method.
//  To get a buffer from a string you can use the Buffer.from method like this:


// Numbers

// If you want to read a number out of the buffer, there is a set of built in methods that specify what bitlength, encoding, and endianness you’re dealing with. The method names follow the following convention:

// Either ‘read’ or ‘write’ to indicate the type of operation.
// Followed by either ‘Float’, ‘Double’, ‘Int’, or ‘UInt’ (unsigned int).
// Followed by the bitlength. This isn’t used by floats or doubles since they have an assumed bitlength of 32 and 64 respectively.
// Followed by ‘BE’ or ‘LE’, big-endian and little-endian respectively. This isn’t used by 8 bit integers because endianness is a byte-level property. You can’t order a single byte.

// console.log(Buffer.from('hello world', 'utf8'));
// create an empty buffer with length of 4 bytes.
const buf = Buffer.alloc(4);

// write the unsigned 32-bit, big-endian number 123 into the buffer starting
// at index 0 of the buffer.
buf.writeUInt32BE(123, 0);

// read the number starting at index 0
console.log(buf.readUInt32BE(0));
// outputs: 123