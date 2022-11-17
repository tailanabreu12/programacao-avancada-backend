// Desafio: utilize a classe nativa Date para, dentro de uma função, exibir via console uma string com a hora, minutos e segundos atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer?

// Agora, utilize o método setInterval apenas uma vez no lugar de setTimeout e responda às mesmas perguntas.

function myFunction() {
    const date = new Date();
    const hora = date.getHours();
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();
    const string =  `São exatamente: ${hora}:${minutos}:${segundos} segundos`;
    console.log(string);

}

setTimeout(myFunction, 5000);
setTimeout(myFunction, 5000);
setTimeout(myFunction, 5000);
setInterval(myFunction, 5000);
setInterval(myFunction, 5000);
setInterval(myFunction, 5000);

// Basicamente o setTimeout executa a função apenas uma vez, enquanto o setInterval executa a função varias em um determinado intervalo de tempo, no caso a cada 5 segundos.