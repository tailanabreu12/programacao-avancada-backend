const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emiter = new EventEmitter();

emiter.on('log', (message, object) => { // escuta o evento log
    fs.appendFile(path.join(__dirname, 'log.txt'), object + '\n', (err) => { // escreve no arquivo log.txt
        if (err) throw err; // se der erro, lança uma exceção
    });
    console.log(message); // imprime a mensagem no console
});


function log(message, object) { // função que recebe uma mensagem e um objeto
    emiter.emit('log', message, object); // emite um evento chamado log
}

module.exports = log;