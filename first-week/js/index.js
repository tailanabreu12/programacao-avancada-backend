// Overview de JavaScript

// console
console.log('Texto dentro do console.log');
console.error('Texto dentro do console.error');
console.warn('Texto dentro do console.warn');


// Variáveis

let x = 10;

if(true) {
    let x = 20;
    console.log(x);
}

// Tipos de dados

// String
const name = 'Tailan';
console.log(name);
console.log(typeof name);

// Number
let n = 10;
console.log(n);
console.log(typeof n);
n = 15.99;
console.log(n);
console.log(typeof n);

// Boolean
const isOpen = true;
console.log(isOpen);
console.log(typeof isOpen);

// Null
const a = null;
console.log(a);
console.log(typeof a);

// Undefined
let nada;
console.log(nada);
console.log(typeof nada);

// Array
const linguagens = ['C++', 50, 'Python', 'JS'];
console.log(linguagens[1]);
console.log(typeof linguagens);

// Object literals - Objetos literais
const user = {
    username: 'tailan',
    password: 'teste123',
    age: 23,
    name: 'Tailan'
}
console.log(user);
console.log(typeof user);

// String 
const text = 'qualquer texto';
console.log(text.length);
const textToArray = text.split(' '); // Transforma em array(split)
console.log(textToArray[1]); // Retorna o segundo elemento do array

const arrayToString = textToArray.join(' '); // Transforma em string(join)
console.log(typeof arrayToString);

// procurar algo dentro de uma string 
console.log(text.indexOf('texto')); // Retorna a posição do texto dentro da string

// econtrar ultima letra de uma string
const lastLetter = text.charAt(text.length - 1);
console.log(lastLetter);

//pegar um pedaço de uma string
const text2 = 'qualquer um';
const text2Slice = text2.slice(2, 4); // Retorna o pedaço da string
console.log(text2Slice);

// Mais sobre arrays
const chars = ['AAA', 'B', 'C', 'D'];
console.log(chars.length); // Retorna o tamanho do array

//chegar no ultimo elemento do array
console.log(chars[chars.length - 1]); 

// Adicionar elemento em uma posição específica
chars[5] = 'F';
console.log(chars);

// Remove o último elemento do array
chars.pop(); 
chars.pop(); 
chars.pop(); 
chars.pop(); 
chars.pop(); 
chars.pop(); 

//insere um elemento no final do array
chars.push('E');
console.log(chars);

// Adicionar elemento no começo do array
chars.unshift('0');
console.log(chars);

// Remove elemento do começo do array
chars.shift();
console.log(chars);

// Estudar sobre desestruturação e JSON

