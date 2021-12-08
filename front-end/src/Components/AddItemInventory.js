import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import * as React from 'react';



function AddItemInventory() {

    const SubmitForm = async () => {
        var Dados = {}
        Dados.nome = Nome
        Dados.descricao = Descricao
        Dados.custo = Custo
        Dados.unidade = Unidade
        Dados.quantidade = Quantidade
        console.log(Dados)
        await axios.post('http://localhost:8082/estoque', Dados).then(response => {
            alert(response.data.msg)
        })
            .catch(err => {
                console.log(err);
            })
    }

    const [Nome, setNome] = useState('')
    const [Descricao, setDescricao] = useState('')
    const [Custo, setCusto] = useState('')
    const [Unidade, setUnidade] = useState('')
    const [Quantidade, setQuantidade] = useState('')

    return(
        <div>
            <Typography variant="h5" component="div" m={2} fontFamily="Times New Roman">Adicionar item no estoque :</Typography>
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
                            <TextField  id="Descrição" label="Descrição" variant="outlined" sx={{ m: 2 }} onChange={(e) => setDescricao(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="Custo" label="Custo" variant="outlined" sx={{ m: 2 }} onChange={(e) => setCusto(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="Unidade" label="Unidade" variant="outlined" sx={{ m: 2 }} onChange={(e) => setUnidade(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="Quantidade" label="Quantidade" variant="outlined" sx={{ m: 2 }} onChange={(e) => setQuantidade(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ m: 2 }} onClick={SubmitForm} >Registrar</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}

export default AddItemInventory;
