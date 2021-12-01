import * as React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { border, Box } from '@material-ui/system';

import { Link } from "react-router-dom";

function Login(){

    return(
        <div className="Login">
                <Grid container
                justifyContent="center"
                alignItems="center"
                direction={"row"}
                sx={{border: '1px solid black'}}
                
                >
                        <Grid item>
                            <Grid container
                                    m={2}
                                    direction={"column"}
                                    justifyContent="center"
                                    alignItems="center"
                                    >
                                    <Grid item>           
                                        <TextField id="Email" label="Email" variant="outlined" sx={{m: 2}}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Senha" label="Senha" variant="outlined" sx={{m: 2}}/>
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