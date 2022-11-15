const os = require('os');
const log = require('./logger');


//calback que atualiza a memoria a cada 1 segundo
setInterval(() => {

// objeto que amarzena as informações da memoria, freemen, totalmen e data e hora

const { freemem, totalmem } = os; // desestruturação para pegar apenas as propriedades que eu quero do objeto os

// const dateTime = new Date().toLocaleString();
//pega a hora atual e formata para o padrao brasileiro
const dateNow = new Date().toLocaleDateString();
const hourNow = new Date().toLocaleTimeString();

const total = parseInt(totalmem() / 1024 / 1024);
const freeMem = parseInt(freemem() / 1024 / 1024);
const usage = total - freeMem;
const percents = parseInt((usage / total) * 100);
// console.log(`${percents} %`);
const stats = {
    total: `${total} MB`,
    free: `${freeMem} MB`,
    percents: `${percents}% em uso`,
    date: dateNow,
    hour: `${hourNow}`
}

// transformando o objeto stats em JSON
const statsJSON = JSON.stringify(stats);
console.clear(); // limpa o console
console.log('========= PC STATS ========');
console.table(stats);

log(`Rodando o script de monitoramento de memoria:`, statsJSON); // chamando a função log do arquivo logger.js

}, 1000);