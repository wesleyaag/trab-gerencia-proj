const mongoose = require("mongoose");

const carrinho_schema = new mongoose.Schema({
    id : {
        type : String,
        required : true
    },

    cliente : {
        type : String
    },

    itens : {
        qtd_item : int
    }
    

});

const carrinho = mongoose.model("carrinho", carrinho_schema);
module.exports = carrinho;