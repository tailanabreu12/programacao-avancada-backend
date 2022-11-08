/*
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
console.log(text.toUpperCase());
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
*/


// Desafio Calculadora

function sum(){
    const formData = new FormData(document.querySelector('form'));
    const n1 = formData.get('n1');
    const n2 = formData.get('n2');
    console.log(n1+' '+n2);
}

// object literals 

const products = {
    name: 'Camisa',
    price: 29.99,
    inStock: true,
    size: ['P', 'M', 'G', 'GG'],
}

console.log(products.price);
console.log(products['price']);
console.log(products.size[products.size.length - 1]);

// destructuring - desestruturação

const {name, price, inStock, size} = products; // desestruturanco o objeto products
console.log(name); 

// price = '30.2';
console.log(price);

const vector = [3, 7, 2,45, 99];
const [v1, v2, ...otherVetor] = vector;
console.log(v1);
console.log(v2);
console.log(otherVetor);

// JSON - JavaScript Object Notation
// XML é concorrente do JSON

const dog = {
    name: 'Scooby',
    age: 10
}
console.log(dog);

const dogJson = JSON.stringify(dog); // Transforma o objeto em JSON
console.log(dogJson);
const dogObject = JSON.parse(dogJson); // Transforma o JSON em objeto
console.log(dogObject);

const jsonErrado = '{"primeiro": "dado1", "segundo": 222, "terceiro": "dado3"}';
const jsonErradoObject = JSON.parse(jsonErrado);

//Desafio 1 Minha maneira 
const dataNum = [10, 20, 30, 40, 50];
const [n1, n2, n3, n4, n5] = dataNum;
// const dataNumJson = JSON.stringify(dataNum);

// template literals - template strings

const dataNumTemplateString = `{
    "n1": ${n1},
    "n2": ${n2},
    "n3": ${n3},
    "n4": ${n4},
    "n5": ${n5} 
}`; 

console.log(dataNumTemplateString); 



// desafio 2 calculadora que armazena em um objeto JSON o resultado das quatro operações basicas
// minha maneira

/* 
const num1 = 10;
const num2 = 20;
const calc = {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num1 / num2
}

const resultado = JSON.stringify(calc);
console.log(resultado)
   
*/  

//Desafio 2 
// Professor

const numero1 = 10;
const numero2 = 15;
const calculadora = {
    sum: numero1 + numero2,
    sub: numero1 - numero2,
    mult: numero1 * numero2,
    div: numero1 / numero2
}
const resultado2 = JSON.stringify(calculadora);
console.log(resultado2)



// operador ternário - if simplificado 
// const resultado3 = n > 20 ? 'Maior que 20' : 'Menor que 20'; 


// estruturas, métodos de listas, funções

const texto = '0'
if(texto === 0)
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...
// operador ternário
// const resultado =  n > 20 ? true : false
// console.log(resultado)
// console.log(typeof resultado)
// repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle
/*
let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){
    console.log('O \'elemento\' da\n\n vez é ' + lista[contador] + '.')
    contador++ // contador = contador + 1
}
const outraLista = ['a', 'b', 'd', 'e', 'c']
for(let contador = 0; contador < outraLista.length; contador++)
    console.log(`O elemento da
    vez é ${outraLista[contador]}.`) //template literais, ou template strings
*/
const a = 5;
const b = 10;
const out = `Quinze é: ${(a+b)}
e não ${(2*a+b)}.`;
console.log(out);

// metodos de arrays    
const names = ['Tailan', 'Victor', 'Paulo', 'Antonio']
names.forEach(function(name){
    console.log(name)
});

const modifielNames = names.map(function(name){ // map retorna um novo array 
    if (name === 'Tailan')                      // com os elementos modificados
        return name + ' é o melhor!'            // de acordo com a função passada
    else
        return name
});

modifielNames.forEach(function(name){
    console.log(name);
});

// metodo filter - retorna um novo array com os elementos que passaram no teste

const numArray = [90, 50, 43, 42, 12, 10, 0,1, 4, 5].filter(function(name){
        return name < 10;
});
numArray.forEach(function(num){
    console.log(num);
});

console.log(numArray);

//Somar todos os elementos de um array
const sumArray = numArray.reduce(function(num, total){ // reduce retorna um valor único
    return total + num;
});
console.log(sumArray);

// names.forEach(element => {
//     console.log(element)
// });

// funcões 

function myFunction(){
    return 'Testando a minha funcao';
}
console.log(myFunction());

function myFunction2(name, lastName){
    return `Meu nome é ${name} ${lastName}.`;
}

console.log(myFunction2('Tailan', 'Abreu'));

// Arrow functions === funções anônimas
// funções anônimas - funções sem nome
//function(data) { return 0; }

(data) => { return 0; }

const myArrowFunction = function(a, b) {
    return a + b;
}
console.log(myArrowFunction(5, 2));

const myArrowFunction2 = (a, b) => { // utilizando arrow function
    return a + b;
}

const myArrowFunction3 = (a, b) => a + b; // arrow function simplificada

// transforme a função a seguir em uma arrow function

/*
function fora() {
    let x = 7
    function somarXMais5(x) {
        return x + 5;
    }
    return somarXMais5();
}
*/


() => ( (x=7) => (x+5) )