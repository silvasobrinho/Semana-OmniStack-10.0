import socketio from 'socket.io-client';

const socket = socketio('http://b9935e63.ngrok.io', {
    autoConnect: false
});

function subscribeToNewDevs(subscribeFunction){
    console.log("aqui na subscription", subscribeFunction)
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs){
    socket.io.opts.query ={
        latitude,
        longitude,
        techs,
    };
    socket.connect();
}

function disconnect(){
     if(socket.connected){
         socket.disconnect();
     }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};