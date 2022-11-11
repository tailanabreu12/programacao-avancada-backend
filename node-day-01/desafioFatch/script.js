// utilizando o fetch para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users

fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())    
    .then((data) => {
        const name = data.map((user) => user.name)
        const email = data.map((user) => user.email)
        console.log(name);
        console.log(email);
        
        // seleciona o elemento
        const ul = document.querySelector('ul');
        for (let i = 0; i < name.length; i++) {
            const li = document.createElement('li');
            li.textContent = name[i] + ' - ' + email[i];
            ul.appendChild(li);
        };
    })

    