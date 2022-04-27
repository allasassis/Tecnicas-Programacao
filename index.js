// TODOS OS CÓDIGOS E EXPLICAÇÕES NO SLIDE NODE.JS

/* const{createServer} = require('http');
let server = createServer((request,response)=>{
    response.writeHead(200,{"Content_Type":"text/html"});
    response.write('<h1> Hello World! </h1><p> Projeto</p>');
    response.end();
});
server.listen(8000);
console.log("Projeto iniciado com sucesso!"); */

let express = require('express');
let app = express();

app.get('/',function(req, res){
    res.send('ROTA GET')
});

app.get('/rota1',function(req, res){
    res.send('Você está acessando a rota 1! ');
});

app.listen(3000, function(){
    console.log("Projeto iniciado na porta 3000");
});