let http = require('http');
const porta = 3000;

let server = http.createServer(
                                (req, res) => {
                                    res.end('Testando nodejs - Hello World!!');
                                }
            );

server.listen(
                porta, 
                () => { 
                            console.log(`Servidor em execução. Porta: ${porta}.`); 
                        }
              );