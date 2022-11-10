/*

// Importando o módulo http do node para dentro da constante http
const http = require('http'); 

const hostname = '127.0.0.1';
const port = 3000;

// Criando um servidor http com a função createServer do módulo http
const server = http.createServer((req, res) => {  // req = requisição, res = resposta 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // Definindo o tipo de conteúdo da resposta como texto puro (plain text) 
  res.end('Antonio is top'); // Finalizando a resposta com a mensagem 
});


// Event Loop - Eventos que acontecem no servidor 

// listen = escutar 
// Iniciando o servidor na porta 3000 e no endereço 
server.listen(port, hostname, () => { // Função de callback que será executada quando o servidor estiver pronto para receber requisições 
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/


/* 


// Importando o módulo fs do node para dentro da constante fs 
let fs = require('fs'); // fs = file system

console.log('Primeiro comando.')

fs.readFile('.text.txt', callback);



function callback(err, content) {
    if (err) return console.error("Erro");
    console.log(String(content));
};
console.log('Segundo comando.');
console.log('Terceiro comando.');

setTimeout(() => (console.log('Testando o setTimeOut')), 3000); // 3000 = 3 segundos 

function myFunction() {
    console.log('Testando a função setTimeout');
}

console.log('Comando que está depois da função setTimeout');

*/

//chamando uma funcao sem nome
// (function () {
//     console.log('Testando a função sem nome');
// })();



// importando o modulo date do node para dentro da constante date

function myFunction() {
    const date = new Date();
    const hora = date.getHours();
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();
    const string =  `São exatamente: ${hora}:${minutos}:${segundos} segundos`;
    console.log(string);

}

setTimeout(myFunction, 5000);
setInterval(myFunction, 5000);








// funcao para gerar um log de entrada no arquivo log.txt
// function logEntrada(req, res) {
//     // escrevendo no arquivo log.txt
//     fs.appendFile('log.txt', 'Entrada: ' + new Date() + '\n', function (err) {
//         if (err) throw err;
//         console.log('Entrada registrada!');
//     });
// }




















// criar função para atualizar o servidor a cada 5 segundos
// function updateServer() {
//     setInterval(() => {
//         server.listen(port, hostname, () => {
//             console.log(`Server running at http://${hostname}:${port}/`);
//         });
//     }, 5000);

// }

// inicia a função updateServer a cada 5 segundos
// updateServer();

// funcao para verificar se o servidor esta rodando
// function isServerRunning() {
//     if (servidor._idleTimeout == -1) {
//         console.log('Servidor parado');
//     } else {
//         console.log('Servidor rodando');
//     }
// }

//funcao que conserta o erro 
