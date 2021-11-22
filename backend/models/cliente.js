const mongoose = require("mongoose");

const Cliente_schema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
        
    email : {
        type : String,
        required : true
    },

    senha : {
        type : String,
        required : true
    },

    telefone : {
        type : String,
        required : true
    },

    endereço : {
        type : String,
        required : true
    }

});

const cliente = mongoose.model("cliente", Cliente_schema);
module.exports = cliente;