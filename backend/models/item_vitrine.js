const mongoose = require("mongoose");

const item_vitrine_schema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
        
    id : {
        type : Number, //int
        required : true
    },

    descricao : {
        type : String,
    },

    foto : {
        type : String,
    },

    preço : {
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

const item_vitrine = mongoose.model("item_vitrine", item_vitrine_schema);
module.exports = item_vitrine;