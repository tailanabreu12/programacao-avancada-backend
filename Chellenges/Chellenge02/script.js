// Desafio: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. 
// Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.


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


// Desafio: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. 
// Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) 
// com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.



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