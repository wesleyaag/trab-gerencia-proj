const mongoose = require("mongoose");

const Funcionario_schema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },

    cpf : {
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

    cargo : {
        type : String,
        required : true
    }

});

const funcionario = mongoose.model("funcionario", Funcionario_schema);
module.exports = funcionario;