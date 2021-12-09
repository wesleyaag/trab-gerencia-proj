import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/core';

function Register() {

    const SubmitForm = async () => {
        var Dados = {}
        Dados.nome = Nome
        Dados.email = Email
        Dados.senha = Senha
        Dados.telefone = Telefone
        Dados.endereço = Endereco
        console.log(Dados)
        await axios.post('http://localhost:8082/cliente', Dados).then(resp => {
            setOpenSnack(true)
            setMessage(resp.data.msg)
            setColor("success")
        })
            .catch(err => {
                console.log(err);
            })
    }

    function handleCloseSnack(){
        setOpenSnack(false)
    }

    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [Endereco, setEndereco] = useState('')
    const [openSnack, setOpenSnack] = useState(false)
    const [messageSnack, setMessage] = useState("")
    const [colorSnack, setColor] = useState("")

    return (
        <div className="Login">
            <Typography variant="h5" component="div" m={2} fontFamily="Times New Roman">Registar-se :</Typography>
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



            <Snackbar
                open={openSnack}
                onClose={handleCloseSnack}
                anchorOrigin={{vertical:'bottom', horizontal: 'center'}}
            >
                <Alert onClose={handleCloseSnack} severity={colorSnack == "" ? "success" : colorSnack} sx={{ width: '100%' }}>
                {messageSnack}
                </Alert>
            </Snackbar>
        </div>
    );

}

export default Register;