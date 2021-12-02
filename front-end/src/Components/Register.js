import * as React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { border, Box } from '@material-ui/system';
import { useState } from 'react';
import axios from 'axios';

function Register() {

    const SubmitForm = () => {
        var Dados = {}
        Dados.nome = Nome
        Dados.email = Email
        Dados.senha = Senha
        Dados.telefone = Telefone
        Dados.endereco = Endereco
        console.log(Dados)
        axios.post('http://localhost:8082/cliente', Dados).then(response => {
            alert(response.data)
        })
            .catch(err => {
                console.log(err);
            })
    }

    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [Endereco, setEndereco] = useState('')

    return (
        <div className="Login">
            <Grid container
                justifyContent="center"
                alignItems="center"
                direction={"row"}

            >
                <Grid item>
                    <Grid container
                        m={2}
                        direction={"column"}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <TextField id="Nome" label="Nome" variant="outlined" sx={{ m: 2 }} onChange={(e) => setNome(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField type="email" id="Email" label="Email" variant="outlined" sx={{ m: 2 }} onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField type="password" id="Senha" label="Senha" variant="outlined" sx={{ m: 2 }} onChange={(e) => setSenha(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="Telefone" label="Telefone" variant="outlined" sx={{ m: 2 }} onChange={(e) => setTelefone(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="Endereço" label="Endereço" variant="outlined" sx={{ m: 2 }} onChange={(e) => setEndereco(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ m: 2 }} onClick={SubmitForm} >Registrar</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


        </div>
    );

}

export default Register;