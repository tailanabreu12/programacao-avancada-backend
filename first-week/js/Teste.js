// switch case
/* 
const dia = 'domingo';
switch(dia){
    case 'segunda':
        console.log('Hoje é segunda');
        break;
    case 'terça':
        console.log('Hoje é terça');
        break;
    case 'quarta':
        console.log('Hoje é quarta');
        break;
    case 'quinta':
        console.log('Hoje é quinta');
        break;
    case 'sexta':
        console.log('Hoje é sexta');
        break;
    case 'sabado':
        console.log('Hoje é sabado');
        break;
    case 'domingo':
        console.log('Hoje é domingo');
        break;
    default:
        console.log('Dia inválido');
}
*/
/*
// regex validate cpf
const cpf = '123.456.789-00';
const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
console.log(regexCpf.test(cpf));
*/



// function validateCPF     
function validateCPF(cpf){ // cpf = 111.111.111-11
    if(cpf.length !== 11){
        return {valid: false, text: 'CPF deve ter 11 dígitos.'};
    } else {
        return {valid: true, text: 'CPF válido.'};
    }
}

// REGEX - Expressões regulares 
// \d - qualquer dígito
// \D - qualquer coisa que não seja dígito
// \w - qualquer caractere de palavra [a-zA-Z0-9_]
// \W - qualquer coisa que não seja caractere de palavra
// \s - qualquer espaço em branco [ \t\n\r\f\v]
// \S - qualquer coisa que não seja espaço em branco
// . - qualquer caractere exceto quebra de linha
// \. - ponto
// * - 0 ou mais
// + - 1 ou mais
// ? - 0 ou 1
// {n,m} - de n até m
// ^ - começo da string
// $ - fim da string
// [abc] - conjunto de caracteres
// [^abc] - negação de conjunto de caracteres
// (abc) - grupo
// (a|b) - ou
// \1 - retrovisor 

//regex validate email
/*
const email = ' ';
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(regexEmail.test(email));
*/





