const mongoose = require("mongoose");

const item_estoque_schema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
        
    id : {
        type : int,
        required : true
    },

    descricao : {
        type : String,
    },

    custo : {
        type : double,
        required : true
    },

    unidade : {
        type : String,
        required : true
    },

    quantidade : {
        type : int,
        required : true
    },

    data : {
        type : Date,
        required : true
    }

});

const item_estoque = mongoose.model("item_estoque", item_estoque_schema);
module.exports = item_estoque;