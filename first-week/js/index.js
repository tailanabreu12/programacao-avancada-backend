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

/*

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

*/

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

/*

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


*/
// operador ternário - if simplificado 
// const resultado3 = n > 20 ? 'Maior que 20' : 'Menor que 20'; 


// estruturas, métodos de listas, funções


/*
const texto = '0'
if(texto === 0)
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...

*/


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


const a = 5;
const b = 10;
const out = `Quinze é: ${(a+b)}
e não ${(2*a+b)}.`;
console.log(out);

*/
// metodos de arrays    


const names = ['Tailan', 'Victor', 'Paulo', 'Antonio', '11111111111111111111111111111']
names.forEach(function(name){
    console.log(name)
});

const modifielNames = names.map(function(name){ // map retorna um novo array 
    if (name === 'Tailan')                      // com os elementos modificados
        return name + ' é o melhor!'            // de acordo com a função passada
    else
        return name
});

// modifielNames.forEach(function(name){
//     console.log(name);
// });


// const namesLength = names.map(function(value){
//     return value.length;
// })
// console.log(namesLength);

// const namesLength = names.map(({length}) => length);
// console.log(namesLength);   



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


const fora = () => ((x=7), ()=>x+5)  ()
console.log(fora())


// closure - função que retorna outra função

let varX = 50;
function out(){
    let varX = 35
    function sumXand5(){
        let varX = 10
        return varX + 5;
    }
    return sumXand5();
}
console.log(out());



// POO - Programação Orientada a Objetos
// Uma classe pode ter vários objetos
// Pra uma classe ser instanciada, ela precisa ter um construtor
// Construtor - método especial que é chamado quando a classe é instanciada
// this - palavra reservada que representa o objeto que está sendo criado
// Atributos - características do objeto
// Métodos - ações que o objeto pode realizar
// Encapsulamento - proteger os atributos e métodos de um objeto
// Herança - uma classe pode herdar atributos e métodos de outra classe
// Polimorfismo - uma classe pode ter vários métodos com o mesmo nome, mas com comportamentos diferentes
// Abstração - é o processo de esconder detalhes de implementação e mostrar somente as funcionalidades ao usuário
// Classe - é um modelo que define o comportamento de um objeto
// Objeto - é uma instância de uma classe
// Atributo - é uma característica do objeto
// Método - é uma ação que o objeto pode realizar
// Instância - é um objeto criado a partir de uma classe



class Product {
    name;
    price;
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    productDetails(){
        return `O produto ${this.name} custa ${this.price}.`;
    }

    static test(){
        console.log('Testando o método estático');
    }
}

//instanciando um objeto Product
const shirt = new Product('Camisa Branca', 19.99)
console.log(shirt.productDetails()); 

const prink = new Product('Short verde', 24.99)
console.log(prink.productDetails()); 

Product.test();



// Herança - uma classe pode herdar atributos e métodos de outra classe

class Tenis extends Product {
    
    constructor(name, price, size){
        super(name, price);
        this.size = size;
    }

    showNumber(){
        return `O tamanho do ${this.name} é ${this.size}`;
    }

    // productDetails(){
    //     return `O produto ${this.name} custa ${this.price} e tem tamanho ${this.size}.`;
    // }
}

const tenis = new Tenis('Tenis Nike Jordan', 199.99, 42);
console.log(tenis.showNumber());
console.log(tenis.productDetails());



// DOM - Document Object Model - Modelo de Objeto de Documento 
// - é uma interface que representa documentos HTML e XML através de objetos. 
// - Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

// window - objeto global do browser
// document - objeto que representa o html
// getElementById - método que retorna um elemento html pelo id
// getElementsByTagName - método que retorna uma coleção de elementos html pelo nome da tag
// getElementsByClassName - método que retorna uma coleção de elementos html pelo nome da classe
// querySelector - método que retorna o primeiro elemento html que corresponde ao seletor css
// querySelectorAll - método que retorna uma coleção de elementos html que correspondem ao seletor css
// innerHTML - propriedade que retorna ou define o html interno de um elemento
// textContent - propriedade que retorna ou define o texto interno de um elemento
// value - propriedade que retorna ou define o valor de um elemento
// addEventListener - método que adiciona um evento a um elemento
// onclick - evento que ocorre quando o elemento é clicado
// onmouseover - evento que ocorre quando o mouse passa por cima do elemento
// onmouseout - evento que ocorre quando o mouse sai de cima do elemento
// onkeydown - evento que ocorre quando uma tecla do teclado é pressionada
// onkeyup - evento que ocorre quando uma tecla do teclado é solta
// onkeypress - evento que ocorre quando uma tecla do teclado é pressionada e solta
// onfocus - evento que ocorre quando um elemento recebe o foco
// onblur - evento que ocorre quando um elemento perde o foco
// onsubmit - evento que ocorre quando um formulário é enviado
// onreset - evento que ocorre quando um formulário é resetado
// onselect - evento que ocorre quando um texto é selecionado
// onchange - evento que ocorre quando o valor de um elemento é alterado
// ondblclick - evento que ocorre quando um elemento é clicado duas vezes
// onmousemove - evento que ocorre quando o mouse é movido sobre um elemento
// onmousedown - evento que ocorre quando um botão do mouse é pressionado sobre um elemento
// onmouseup - evento que ocorre quando um botão do mouse é solto sobre um elemento
// oncontextmenu - evento que ocorre quando o botão direito do mouse é clicado sobre um elemento
// onwheel - evento que ocorre quando a roda do mouse é rolada sobre um elemento
// oncopy - evento que ocorre quando um texto é copiado
// oncut - evento que ocorre quando um texto é cortado
// onpaste - evento que ocorre quando um texto é colado
// ondrag - evento que ocorre quando um elemento é arrastado
// ondragstart - evento que ocorre quando um elemento começa a ser arrastado
// ondragend - evento que ocorre quando um elemento termina de ser arrastado
// ondragover - evento que ocorre quando um elemento está sendo arrastado sobre outro elemento
// ondragenter - evento que ocorre quando um elemento arrastado entra em outro elemento
// ondragleave - evento que ocorre quando um elemento arrastado sai de outro elemento
// ondrop - evento que ocorre quando um elemento arrastado é solto sobre outro elemento
// onscroll - evento que ocorre quando um elemento é rolado
// onload - evento que ocorre quando um elemento é carregado
// onunload - evento que ocorre quando um elemento é descarregado
// onerror - evento que ocorre quando ocorre um erro ao carregar um elemento
// onresize - evento que ocorre quando o tamanho de um elemento é alterado
// onselectstart - evento que ocorre quando o texto de um elemento é selecionado
// onstorage - evento que ocorre quando o armazenamento local é alterado
// onhashchange - evento que ocorre quando a url é alterada
// onmessage - evento que ocorre quando uma mensagem é recebida
// onoffline - evento que ocorre quando o navegador fica offline
// ononline - evento que ocorre quando o navegador fica online
// onpopstate - evento que ocorre quando o histórico de navegação é alterado
// onshow - evento que ocorre quando um elemento é mostrado
// ontoggle - evento que ocorre quando um elemento é alternado
// onwheel - evento que ocorre quando a roda do mouse é rolada sobre um elemento
// onabort - evento que ocorre quando uma requisição é interrompida
// oncanplay - evento que ocorre quando o navegador pode tocar o áudio/video
// oncanplaythrough - evento que ocorre quando o navegador pode tocar o áudio/video até o final sem parar para baixar mais dados
// ondurationchange - evento que ocorre quando a duração do áudio/video é alterada
// onemptied - evento que ocorre quando o áudio/video está vazio
// onended - evento que ocorre quando o áudio/video termina

console.log(document.getElementById('titulo'));
console.log(document.getElementsByClassName('text'));
const texts = document.querySelectorAll('.text');
console.log(texts);

texts.forEach((data) => {
    console.log(data);
});

texts[0].textContent = 'Estou alterando o primeiro parágrafo.';
texts[0].innerHTML = '<span>Testando uma alteração no primeiro parágrafo.</span>';

texts[1].style.backgroudColor = 'red';
texts[2].remove();

const button = document.querySelector('#btn');

button.addEventListener('click', () => (texts[3].style.backgroudColor = 'orange'));





// callback - função que é passada como parâmetro para outra função e é executada quando um evento ocorre


// promises - objeto que representa o resultado

