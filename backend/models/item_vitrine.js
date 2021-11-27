const mongoose = require("mongoose");

const item_vitrine_schema = new mongoose.Schema({
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

    foto : {
        type : String,
    },

    preço : {
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
        type : Date
    }

});

const item_vitrine = mongoose.model("item_vitrine", item_vitrine_schema);
module.exports = item_vitrine;