//getting started with tracker 
'use strict';
const dgram = require('dgram'); // creating a datagram socket 
const Buffer = require('buffer').Buffer; // creating a buffer 
const urlParse = require('url').parse; // importing url parse to get specific contents inside url 
// four major steps followed in this 
// send one connection request to the receiver end 
//get response back from the receiver this is shows us that that connection has been established between sender and receiver 
//extract the connection id that tracker which files we are intrested in 
// get announce response and extract peers list 


///<-- setting up crypto 

module.exports.getPeers = (torrent, callback) => { // it acts as an return type when function call is made 
    const socket = dgram.createSocket('udp4'); // creating an ipv4 udp socket 
    const url = torrent.announce.toString('utf8'); // passinfg the url in the form of string 

    // 1. send connect request
    udpSend(socket, buildConnReq(), url); //udp send is simliar tp socket.send 

    socket.on('message', response => {
        if (respType(response) === 'connect') { // resptype is used to check whether it is used to check is it announce request or not 
            // because the same request send through same module to diffrentiate it resptype is used 
            // 2. receive and parse connect response
            const connResp = parseConnResp(response);
            // 3. send announce request
            const announceReq = buildAnnounceReq(connResp.connectionId);
            udpSend(socket, announceReq, url);
        } else if (respType(response) === 'announce') {
            // 4. parse announce response
            const announceResp = parseAnnounceResp(response);
            // 5. pass peers to callback
            callback(announceResp.peers);
        }
    });
};
// building message s
// This tells us that our message should start out with a 64-bit (i.e. 8 bytes) integer at index 0, and that the value should be 0x41727101980. Since we just write 8 bytes, the index of the next part is 8. Now we write 32-bit integer (4 bytes) with the value 0. This moves us up to an offset of 12 bytes, and we write a random 32-bit integer. So the total message length is 8 bytes + 4 bytes + 4bytes = 16 bytes long, and should look something like this:
function udpSend(socket, message, rawUrl, callback = () => {}) {
    const url = urlParse(rawUrl);
    socket.send(message, 0, message.length, url.port, url.host, callback);
}

function respType(resp) {
    // ...
}

function buildConnReq() {
    // ...
}

function parseConnResp(resp) {
    // ...
}

function buildAnnounceReq(connId) {
    // ...
}

function parseAnnounceResp(resp) {
    // ...
}