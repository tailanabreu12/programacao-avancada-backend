const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    const {name, url, del } = URL.parse(req.url, true).query
    if(!name || !url)
        return res.end('show')

    if(del) 
        return res.end('delete')
    
    return res.end('create')
  
}).listen(1200, () => console.log('API is runnung.'))

// Criando uma API para servir o frontend, para que os dados não sejam perdidos, esses dados serão mandados para urls.json onde serão armazenadas.