const express = require('express');
const router = express.Router();

const Cliente = require('../../models/cliente');

//post um cliente

router.post('/', (req, res) => {
    Cliente.create(req.body)
        .then(cliente => res.json({ msg: 'cliente cadastrado com sucesso!' }))
        .catch(err => res.status(400).json({ error: 'Não foi possível cadastrar este cliente' }));
});

//get todos os cliente
router.get('/', (req, res) => {
    Cliente.find()
        .then(cliente => res.json(cliente))
        .catch(err => res.status(404).json(
            { clientesnaoencontrados: 'Não foi possivel encontrar os cliente!' }))
});

//get pelo nome
router.get('/nome/:nome', (req, res) => {
    Cliente.find({ nome: req.params.nome })
        .then(cliente => res.json(cliente))
        .catch(err => res.status(404).json(
            { clientenaoencontrados: 'Não foi possivel encontrar o cliente!' }))
});

//get pelo email
router.get('/email/:email', (req, res) => {
    Cliente.find({ email: req.params.email })
        .then(cliente => res.json(cliente))
        .catch(err => res.status(404).json(
            { clientenaoencontrados: 'Não foi possivel encontrar o cliente!' }))
});

//get pelo telefone
router.get('/tel/:telefone', (req, res) => {
    Cliente.find({ telefone: req.params.telefone })
        .then(cliente => res.json(cliente))
        .catch(err => res.status(404).json(
            { clientenaoencontrados: 'Não foi possivel encontrar o cliente!' }))
});

//atualiza um cliente pelo id
router.put('/:id', (req, res) => {
    Cliente.findByIdAndUpdate(req.params.id, req.body)
        .then(cliente => res.json({ msg: 'Atualizado com sucesso!' }))
        .catch(err =>
            res.status(400).json({ error: 'Não foi possivel encontrar o cliente!' })
        );
});

//remove um cliente
router.delete('/:id', (req, res) => {
    Cliente.findByIdAndRemove(req.params.id, req.body)
        .then(cliente => res.json({ mgs: 'Deletado com sucesso!' }))
        .catch(err => res.status(404).json({ error: 'Não foi possivel encontrar o cliente!' }));
});

module.exports = router;

//