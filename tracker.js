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