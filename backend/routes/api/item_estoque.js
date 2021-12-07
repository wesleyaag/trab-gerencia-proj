const express = require('express');
const router = express.Router();

const Item_estoque = require('../../models/item_estoque');

//post um item no estoque

router.post('/', (req, res) => {
    Item_estoque.create(req.body)
        .then(estoque => res.json({ msg: 'Produto cadastrado com sucesso!' }))
        .catch(err => res.status(400).json({ error: 'Não foi possível cadastrar este Produto' }));
});

//get todos os produtos no estoque
router.get('/', (req, res) => {
    Item_estoque.find()
        .then(estoque => res.json(estoque))
        .catch(err => res.status(404).json(
            { estoquenaoencontrado: 'Não foi possivel encontrar os produtos no estoque!' }))
});

//get pelo nome
router.get('/nome/:nome', (req, res) => {
    Item_estoque.find({ nome: req.params.nome })
        .then(estoque => res.json(estoque))
        .catch(err => res.status(404).json(
            { estoquenaoencontrados: 'Não foi possivel encontrar o produto!' }))
});

//get pela data
router.get('/data/:data', (req, res) => {
    Item_estoque.find({ data: req.params.data })
        .then(estoque => res.json(estoque))
        .catch(err => res.status(404).json(
            { estoquenaoencontrados: 'Não foi possivel encontrar o produto!' }))
});

//get pelo id
router.get('/id/:id', (req, res) => {
    Item_estoque.find({ id: req.params.id })
        .then(estoque => res.json(estoque))
        .catch(err => res.status(404).json(
            { estoquenaoencontrados: 'Não foi possivel encontrar o produto!' }))
});

//atualiza um estoque pelo id
router.put('/:id', (req, res) => {
    Item_estoque.findByIdAndUpdate(req.params.id, req.body)
        .then(estoque => res.json({ msg: 'Atualizado com sucesso!' }))
        .catch(err =>
            res.status(400).json({ error: 'Não foi possivel encontrar o produto!' })
        );
});

//remove um estoque
router.delete('/:id', (req, res) => {
    Item_estoque.findByIdAndRemove(req.params.id, req.body)
        .then(estoque => res.json({ mgs: 'Deletado com sucesso!' }))
        .catch(err => res.status(404).json({ error: 'Não foi possivel encontrar o produto!' }));
});

module.exports = router;