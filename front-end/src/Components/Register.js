import * as React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { border, Box } from '@material-ui/system';

function Register(){

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
                                        <TextField id="Nome" label="Nome" variant="outlined" sx={{m: 2}}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Email" label="Email" variant="outlined" sx={{m: 2}}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Senha" label="Senha" variant="outlined" sx={{m: 2}}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Telefone" label="Telefone" variant="outlined" sx={{m: 2}}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Endereço" label="Endereço" variant="outlined" sx={{m: 2}}/>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" sx={{m: 2}}>Registrar</Button>
                                    </Grid>
                            </Grid>
                        </Grid>
                        
                </Grid>
            
        
        </div>
    );

}

export default Register;