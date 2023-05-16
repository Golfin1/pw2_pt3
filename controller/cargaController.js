const express = require('express');

const cargaModel = require('../model/cargaModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE CATEGORIA(POST)*/
router.post('/carga/inserir', (req,res)=>{

    let tamanho_carga = req.body.tamanho_carga;
    let tipo_carga = req.body.tipo_carga;
    
    cargaModel.create(
        {tamanho_carga,
        tipo_carga}
    ).then(
        ()=>{
           return res.status(201).json({
            errorStatus:false,
            mensageStatus:'CATEGORIA INSERIDA COM SUCESSO'
           });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/carga/selecionar', (req,res)=>{
    
    cargaModel.findAll()
    .then(
        (categorias)=>{
            res.json(categorias);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/carga/alterar', (req,res)=>{

    let id = req.body.id;
    let tamanho_carga = req.body.tamanho_carga;
    let tipo_carga = req.body.tipo_carga;

    cargaModel.update(
        {tamanho_carga,
        tipo_carga},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CATEGORIA ALTERADA COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/carga/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    cargaModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CATEGORIA EXCLUIDA COM SUCESSO'
               });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;