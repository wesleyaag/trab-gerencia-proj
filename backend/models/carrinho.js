const mongoose = require("mongoose");

const item = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
        
    id : {
        type : Number, //int
        required : true
    },

    preço : {
        type : Number, //float
        required : true
    },

    quantidade : {
        type : Number, //int
        required : true
    }
});

const carrinho_schema = new mongoose.Schema({
    id : {
        type : String,
        required : true
    },

    cliente : {
        type : String
    },

    itens : [item]

});

const carrinho = mongoose.model("carrinho", carrinho_schema);
module.exports = carrinho;