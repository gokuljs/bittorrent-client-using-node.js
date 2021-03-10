//getting started with tracker 
'use strict';
const dgram = require("dgram"); // create an dgram socket 
const buffer = require("buffer").Buffer; // importing buffer package to convert string to buffer viceversa
const urlparse = require("url-parse").parse; // importing url parse to get specific contents inside url 
// four major steps followed in this 
// send one connection request to the receiver end 
//get response back from the receiver this is shows us that that connection has been established between sender and receiver 
//extract the connection id that tracker which files we are intrested in 
// get announce response and extract peers list 
module.exports.getPeers = (torrent, callback) => { // its is type of return type 
    const socket = dgram.createSocket('udp4');
    const url = torrent.announce.toString('utf8');

    // 1. send connect request
    udpSend(socket, buildConnReq(), url);

    socket.on('message', response => {
        if (respType(response) === 'connect') {
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