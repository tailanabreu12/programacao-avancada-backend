// utilizando o fetch para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users

//Minha versao

fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())    
    .then((data) => {
        const email = data.map((user) => user.email)
        const name = data.map((user) => user.name)
        console.log(name);
        console.log(email);
        
        // seleciona o elemento
        const ul = document.querySelector('ul');
        for (let i = 0; i < name.length; i++) {
            const li = document.createElement('li');
            li.textContent = name[i] + ' - ' + email[i];
            ul.appendChild(li);
        };
    }).catch((error) => {
        console.log(error);
    });

   
    
    // Versão do professor
/*     fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((dados) => {
        return dados.map((item) => {
            const li = document.createElement('li');
            li.innerHTML = `Nome: ${item.name} - ${item.email}`; 
            document.querySelector('ul').appendChild(li);
        });
    }).catch((error) => {
        console.log(error);
    }); */