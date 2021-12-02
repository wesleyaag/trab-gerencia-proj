const express = require('express');
const router = express.Router();

const Funcionario = require('../../models/funcionario');

router.get('/test', (req, res) => res.send('testando 123'));


//post um funcionario

router.post('/', (req, res) => {
    Funcionario.create(req.body)
        .then(funcionario => res.json({ msg: 'funcionário adicionado com sucesso!' }))
        .catch(err => res.status(400).json({ error: 'Não foi possível inserir este funcionário' }));
});

//get todos os funcionários
router.get('/', (req, res) => {
    Funcionario.find()
        .then(funcionarios => res.json(funcionarios))
        .catch(err => res.status(404).json(
            { funcionariosnaoencontrados: 'Não foi possivel encontrar os funcionários!' }))
});

//get pelo nome
router.get('/nome/:nome', (req, res) => {
    Funcionario.find({ nome: req.params.nome })
        .then(funcionario => res.json(funcionario))
        .catch(err => res.status(404).json(
            { funcionarionaoencontrados: 'Não foi possivel encontrar o funcionário!' }))
});

//get pelo email
router.get('/email/:email', (req, res) => {
    Funcionario.find({ email: req.params.email })
        .then(funcionario => res.json(funcionario))
        .catch(err => res.status(404).json(
            { funcionarionaoencontrados: 'Não foi possivel encontrar o funcionário!' }))
});

//get - retorna todos em determinado cargo
router.get('/:cargo', (req, res) => {
    Funcionario.find({ cargo: req.params.cargo })
        .then(funcionario => res.json(funcionario))
        .catch(err => res.status(404).json(
            { funcionarionaoencontrados: 'Não foi possivel encontrar o funcionário!' }))
});

//atualiza um funcionário pelo id
router.put('/:id', (req, res) => {
    Funcionario.findByIdAndUpdate(req.params.id, req.body)
        .then(funcionario => res.json({ msg: 'Atualizado com sucesso!' }))
        .catch(err =>
            res.status(400).json({ error: 'Não foi possivel encontrar o funcionário!' })
        );
});

//remove um funcionario
router.delete('/:id', (req, res) => {
    Funcionario.findByIdAndRemove(req.params.id, req.body)
        .then(funcionario => res.json({ mgs: 'Deletado com sucesso!' }))
        .catch(err => res.status(404).json({ error: 'Não foi possivel encontrar o funcionário!' }));
});

module.exports = router;