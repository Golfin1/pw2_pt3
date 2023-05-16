/*IMPORT DO PACOTE EXPRESS*/
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

/*HABILITA A APLICAÇÃO A MANIPULAR DADOS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}));

/*  CRIAÇÃO DAS ROTAS DE CATEGORIA */
const cargaController = require('./controller/cargaController');
app.use('/', cargaController);

/*
TESTE DE ROTA HTTP GET
2 PARAMETROS:
    1 - NOME DA ROTA
    2 - CALLBACK QUE EXECUTA A AÇÃO DA ROTA
*/

app.listen(3000, ()=>{ 
    console.log('SERVIDOR RODANDO EM - http://localhost:3000'); 
});