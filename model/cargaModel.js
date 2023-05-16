const sequelize  = require('sequelize');

const connection = require('../database/database');

const carga = connection.define(
    'tbl_carga',
    {
        tamanho_carga:{
            type: sequelize.STRING,
            allowNull: false
        },

        tipo_carga:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//carga.sync({force:true});

module.exports = carga;

