import * as React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { border, Box } from '@material-ui/system';
import { useState } from 'react';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import axios from 'axios';


function Register(){

    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    const [Cargo, setCargo] = useState('')

    const SubmitForm = async () => {
        var Dados = {}
        Dados.nome = Nome
        Dados.email = Email
        Dados.senha = Senha
        Dados.cpf = cpf
        Dados.cargo = Cargo
        console.log(Dados)
        await axios.post('http://localhost:8082/funcionario', Dados).then(response => {
            alert(response.data.msg)
        })
    }

    return(
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
                                        <TextField id="Nome" label="Nome" variant="outlined" sx={{m: 2}} onChange={(e) => setNome(e.target.value)}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField type="email" id="Email" label="Email" variant="outlined" sx={{m: 2}} onChange={(e) => setEmail(e.target.value)}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField type="password" id="Senha" label="Senha" variant="outlined" sx={{m: 2}} onChange={(e) => setSenha(e.target.value)}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="CPF" label="Cpf" variant="outlined" sx={{m: 2}} onChange={(e) => setCpf(e.target.value)}/>
                                    </Grid>
                                    <Grid item>
                                    <Select
                                        onChange={(e) => setCargo(e.target.value)}
                                        displayEmpty
                                        >
                                        <MenuItem value="Funcionario">Funcionário</MenuItem>
                                        <MenuItem value="Entregador">Entregador</MenuItem>
                                    </Select>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" sx={{m: 2}} onClick={SubmitForm}>Registrar</Button>
                                    </Grid>
                            </Grid>
                        </Grid>
                        
                </Grid>
            
        
        </div>
    );

}

export default Register;