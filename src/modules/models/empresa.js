const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const EmpresaSchema = new Schema({

    nome: {
        type: String,
        max: 100,
        required:true
    },
    cnpj:{
        type: Number,
        max: 14,
        required:true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    produtos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProdutosModel',
        }
    ]

});

module.exports = mongoose.model('EmpresaModel',EmpresaSchema)