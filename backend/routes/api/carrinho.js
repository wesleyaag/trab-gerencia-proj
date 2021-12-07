const express = require('express');
const router = express.Router();

const Carrinho = require('../../models/carrinho');

//post um item no carrinho

router.post('/', (req, res) => {
    Carrinho.create(req.body)
        .then(carrinho => res.json({ msg: 'carrinho cadastrado com sucesso!' }))
        .catch(err => res.status(400).json({ error: 'Não foi possível cadastrar este carrinho' }));
});

//get todos os carrinhos
router.get('/', (req, res) => {
    Carrinho.find()
        .then(carrinho => res.json(carrinho))
        .catch(err => res.status(404).json(
            { estoquenaoencontrado: 'Não foi possivel encontrar os carrinhos!' }))
});

//get pelo cliente
router.get('/cliente/:cliente', (req, res) => {
    Carrinho.find({ nome: req.params.nome })
        .then(carrinho => res.json(carrinho))
        .catch(err => res.status(404).json(
            { estoquenaoencontrados: 'Não foi possivel encontrar o carrinho!' }))
});

//get pelo id
router.get('/id/:id', (req, res) => {
    Carrinho.find({ id: req.params.id })
        .then(carrinho => res.json(carrinho))
        .catch(err => res.status(404).json(
            { estoquenaoencontrados: 'Não foi possivel encontrar o produto!' }))
});

//atualiza um carrinho pelo id
router.put('/id/:id', (req, res) => {
    Carrinho.findByIdAndUpdate(req.params.id, req.body)
        .then(carrinho => res.json({ msg: 'Atualizado com sucesso!' }))
        .catch(err =>
            res.status(400).json({ error: 'Não foi possivel encontrar o carrinho!' })
        );
});

//remove um carrinho
router.delete('/:id', (req, res) => {
    Carrinho.findByIdAndRemove(req.params.id, req.body)
        .then(carrinho => res.json({ mgs: 'Deletado com sucesso!' }))
        .catch(err => res.status(404).json({ error: 'Não foi possivel encontrar o carrinho!' }));
});

module.exports = router;