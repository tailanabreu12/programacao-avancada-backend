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

// function myFunction() {
//     const date = new Date();
//     const hora = date.getHours();
//     const minutos = date.getMinutes();
//     const segundos = date.getSeconds();
//     const string =  `São exatamente: ${hora}:${minutos}:${segundos} segundos`;
//     console.log(string);

// }

// setTimeout(myFunction, 5000);
// setInterval(myFunction, 5000);


// function whiteText(text) {

//     const fs = require('fs'); // importando o modulo fs do node para dentro da constante fs

//     // verifica se o arquivo existe
//     if (fs.existsSync('text.txt')) {
//         // se existir, adiciona o texto no arquivo existente e pula uma linha
//         fs.appendFile('text.txt', "\n" + text , function (err) {
//             if (err) throw err;
//             console.log('Arquivo atualizado com sucesso');
//         });
//     } else {
//         // se não existir, cria o arquivo e adiciona o texto
//         fs.writeFile('text.txt', text, function (err) {
//             if (err) throw err;
//             console.log('Arquivo criado com sucesso');
//         });
//     }
// }
// whiteText('Tailan da');


    // fs.writeFile('text.txt', text, function (err) {
    //     if (err) return console.log(err);
    //     console.log('Arquivo salvo com sucesso');
    // });
    // verifica se o arquivo já existe
//     if (fs.existsSync('text.txt')) {
//         // se existir, adiciona o texto no arquivo existente
//         fs.appendFile('text.txt', text, function (err) {
//             if (err) return console.log(err);
//             console.log('Arquivo salvo com sucesso');
//         });

//         // fs.appendFileSync('text.txt', text);
//     } else {
//         // se não existir, cria o arquivo e adiciona o texto
//         fs.writeFileSync('text.txt', text);
//     }

// }

/*

// Utilizando programação síncrona

console.log('Testando exibição de mensagem antes da função sum');
// função sum com callback
function sumComCallback(callback, callbackError) {
  const result = 1+1;
  if (result === 2) {
    callback
  } else {
    callbackError
  }
}

sumComCallback(
  () => (console.log('Sucesso, A soma é 2.')),
  () => (console.log('A soma não é 2. Alguma coisa deu errado..'))
)

function sum() {
  const result = 1+1;
  if (result == 2) {
    success();
  } else {
    erro();
  }
}

function success() {
  console.log('Sucesso, a soma é 2.');
}

function erro() {
  console.log('A soma não é 2.');
}

sum();  // 
console.log('Testando exibição de mensagem depois da função sumMMM'); // vai aparecer primeiro a mensagem de sucesso, depois a mensagem de erro, pois a função sum é sincrona e a função console.log é síncrona

*/

// Promisses - É uma classe - Promessa de que algo vai acontecer no futuro
// Promisses são funções que podem ser executadas no futuro

// Metodo then() - executa uma função quando a promessa for cumprida
// Metodo catch - executa uma função quando a promessa não for cumprida
// Resolve - promessa cumprida
// Reject - promessa não cumprida


/*
const promisse = new Promise((resolve, reject) => {
  // function sumComCallback(callback, callbackError) {
    const result = 1+2;
    if (result === 2) {
      resolve('Sucesso, a soma é 2.')
    } else {
      reject('A soma não é 2. Alguma coisa deu errado..')
    }
  // }

})

*/

// promisse.then(
//   (resultado)=>(console.log(resultado)),
//   (erro)=>(console.log(erro))
// )


// promisse.catch((resultado)=>(console.log(resultado)))
// promisse.then((message) => {
//   console.log('Sucesso, a soma é 2.');
// }).catch((message) => {
//   console.log('A soma não é 2. Alguma coisa deu errado..');

// })


// voltando para callback
/*
const name = 'Paulo Sampaio';


function whoIsTheBest(callback, callbackError) {
  if (name != 'Paulo Sampaio') {
    callbackError('Tá errado. Não tem como!')
  } else {
    callback({
      name: name,
      message:`humildemente o melhor!`
    })
  }
}

whoIsTheBest(
  ((success) => (console.log(`${success.name} é ${success.message}.`))),
  ((error) => (console.log(error)))
)

*/

// Utilizando a função whoIsTheBest com promisses
const name = 'Paulo Sampaio';

const promisse = new Promise((resolve, reject) => {
  if (name != 'Paulo Sampaio') {
    reject('Tá errado. Não tem como!')
  } else {
    resolve({
      name: name,
      message:`humildemente o melhor!`
    })
  }
})

promisse.then(
  ((success) => (console.log(`${success.name} é ${success.message}.`))),
  ((error) => (console.log(error)))
)
