const fetch = require('node-fetch');

fetch('http://127.0.0.1:3000')
    .then(resposta => resposta.text())
    .then(valor => console.log('Texto: ', valor))
    .catch(erro => console.log(erro.message));