let express = require('express');
let app = express();

app.get('/',function(req, res){
    res.send('ROTA GET')
});

app.get('/rota1',function(req, res){
    // res.send('Você está acessando a rota 1! ');
    let param1 = req.query.nome;                                                        // http://localhost:3000/rota1?nome=Allas   nome = nome da variável requisitada
    let param2 = parseInt(req.query.n1);                                                // http://localhost:3000/rota1?nome=Allas&n1=33&n2=44  tem que usar o & para separar os parâmetros na URL
    let param3 = parseInt(req.query.n2);    
    let soma = param2 + param3;
    res.send('Olá ' + param1 + ', o resultado da sua soma é: ' + soma);
});

app.get('/rota2',function(req, res){
    res.send('Você está acessando a rota 2! ');
});

app.get('/rota3',function(req, res){
    res.send('Você está acessando a rota 3! ');

});

app.listen(3000, function(){
    console.log("Projeto iniciado na porta 3000");
});
