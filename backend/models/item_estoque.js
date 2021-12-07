const mongoose = require("mongoose");

const item_estoque_schema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },

    descricao : {
        type : String,
    },

    custo : {
        type : Number, //float
        required : true
    },

    unidade : {
        type : String,
        required : true
    },

    quantidade : {
        type : Number, //int
        required : true
    },

    data : {
        type : Date
    }

});

const item_estoque = mongoose.model("item_estoque", item_estoque_schema);
module.exports = item_estoque;