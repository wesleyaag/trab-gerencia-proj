const express = require('express');
const router = express.Router();

const Item_estoque = require('../../models/item_estoque');
const Item_vitrine = require('../../models/item_vitrine');

//post um item na vitrine

router.post('/', (req, res) => {
    Item_vitrine.create(req.body)
        .then(vitrine => res.json({ msg: 'Produto cadastrado com sucesso!' }))
        .catch(err => res.status(400).json({ error: 'Não foi possível cadastrar este Produto' }));
        console.log("Alterar no item estoque!");
});

//get todos os produtos no vitrine
router.get('/', (req, res) => {
    Item_vitrine.find()
        .then(vitrine => res.json(vitrine))
        .catch(err => res.status(404).json(
            { vitrinenaoencontrado: 'Não foi possivel encontrar os produtos na vitrine!' }))
});

//get pelo nome
router.get('/nome/:nome', (req, res) => {
    Item_vitrine.find({ nome: req.params.nome })
        .then(vitrine => res.json(vitrine))
        .catch(err => res.status(404).json(
            { vitrinenaoencontrado: 'Não foi possivel encontrar o produto!' }))
});

//get pela data
router.get('/data/:data', (req, res) => {
    Item_vitrine.find({ data: req.params.data })
        .then(vitrine => res.json(vitrine))
        .catch(err => res.status(404).json(
            { vitrinenaoencontrado: 'Não foi possivel encontrar o produto!' }))
});

//get pelo id
router.get('/id/:id', (req, res) => {
    Item_vitrine.find({ id: req.params.id })
        .then(vitrine => res.json(vitrine))
        .catch(err => res.status(404).json(
            { vitrinenaoencontrado: 'Não foi possivel encontrar o produto!' }))
});

//atualiza um item da vitrine pelo id
router.put('/:id', (req, res) => {
    Item_vitrine.findByIdAndUpdate(req.params.id, req.body)
        .then(vitrine => res.json({ msg: 'Atualizado com sucesso!' }))
        .catch(err =>
            res.status(400).json({ error: 'Não foi possivel encontrar o produto!' })
        );
});

//remove um item da vitrine
router.delete('/:id', (req, res) => {
    Item_vitrine.findByIdAndRemove(req.params.id, req.body)
        .then(vitrine => res.json({ mgs: 'Deletado com sucesso!' }))
        .catch(err => res.status(404).json({ error: 'Não foi possivel encontrar o produto!' }));
});

module.exports = router;