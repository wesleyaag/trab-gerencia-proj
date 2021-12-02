import * as React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { border, Box } from '@material-ui/system';
import { useState } from 'react';

import { Link } from "react-router-dom";

function Login(){

    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')

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
                                        <TextField id="Email" label="Email" variant="outlined" sx={{m: 2}} onChange={(e) => setEmail(e.target.value)}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Senha" type="password" label="Senha" variant="outlined" sx={{m: 2}} onChange={(e) => setSenha(e.target.value)}/>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" sx={{m: 2}}>Login</Button>
                                    </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container
                                    m={2}
                                    direction={"column"}
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item>
                                        <Typography variant="body2" gutterBottom fontSize="1rem" fontWeight="bold">Seja Bem vindo ao nosso site!</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" gutterBottom >Ainda não possui login?</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="text" sx={{m: 2}} component={Link} to="/Register">Registrar</Button>
                                    </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            
        
        </div>
    );

}

export default Login;