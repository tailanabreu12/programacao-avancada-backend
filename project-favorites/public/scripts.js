const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load() {  
    // Função que carrega o conteúdo da API.
    const res = await fetch('http://localhost:1200/').then((data) => data.json())
    // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
    res.urls.map(({name, url}) => addElement({name, url}))
}

load()


// Função que adiciona um elemento no DOM, name e url são os parâmetros que serão passados para a função.
function addElement({name, url}) {
    // Criando elementos HTML
    const li = document.createElement('li')
    const a = document.createElement('a')

    // Adicionando o conteúdo do elemento
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.innerHTML = name + ' - ' + url

    const liColor = ul.querySelectorAll('li').length % 2 === 0 ? 'lightblue' : 'lightgreen' // ternário para definir a cor do elemento li (par ou ímpar) 
    li.style.backgroundColor = liColor // adicionando a cor ao elemento li

    // Adicionando o texto ao elemento
    const liText = document.createTextNode(url)

    // Adicionando o elemento filho ao elemento pai
    const button = document.createElement('button') 
    button.appendChild(document.createTextNode('Remover'))  
    button.setAttribute('onclick', `removeElement('${url}')`) // adicionando o atributo onclick ao elemento button e passando a função removeElement como parâmetro 
    button.style.marginLeft = '10px' // adicionando o estilo ao elemento

    // Adicionando os elementos ao DOM

    // li.appendChild(liText) 
    li.appendChild(a) // adicionando o elemento a ao elemento li
    li.appendChild(button) // adicionando o elemento button ao elemento li
    ul.appendChild(li) // adicionando o elemento ao DOM
}



function removeElement() {

    // Pegando o elemento que foi clicado
    const button = event.target //
    console.log(button)
    // button.parentNode.remove() // Forma mais rapida removendo o elemento pai do elemento clicado 

    // Pegando o elemento pai do elemento clicado
    const li = button.parentNode

    // Removendo o elemento pai do elemento clicado
    ul.removeChild(li)

}

form.addEventListener('submit', (event) => { 
    event.preventDefault(); // previnindo o comportamento padrão do formulário (recarregar a página)

    //desestrutura o objeto e pega o valor do name e url do input separados por vírgula
    const [name, url] = input.value.split(',') // split separa o conteúdo do input por vírgula


    if (!input.value)
        return alert('Preencha o campo!')

    if (!url) // se não tiver url - exemplo de erro: 'teste,'
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) // testando se a url não começa com http
        return alert('Digite a url da maneira correta.')

    addElement({ name, url }) // adicionando o elemento no DOM

    input.value = '' // limpando o input
})