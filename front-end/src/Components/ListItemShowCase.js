import { List, ListItem, ListItemText } from "@material-ui/core"
import { Typography } from "@material-ui/core";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { styled } from '@material-ui/core/styles';
import InventoryBackground from "../Content/Images/estoque.jpg"
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StoreIcon from '@material-ui/icons/Store';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function ListItemShowCase() {

    const [Nome, setNome] = useState('')
    const [Descricao, setDescricao] = useState('')
    const [Custo, setCusto] = useState('')
    const [Unidade, setUnidade] = useState('')
    const [Quantidade, setQuantidade] = useState('')
    const [listItems, setItems] = useState([])
    const [editItemDialog, setOpenEditItem] = useState(false)
    const [openExcludeDialog, setOpenExcludeDialog] = useState(false)
    const [item, setItem] = useState('')
    const [openSnack, setOpenSnack] = useState(false)
    const [messageSnack, setMessage] = useState("")
    const [colorSnack, setColor] = useState("")

    useEffect(() => {
        async function getListItemShowCase() {
            await axios.get("http://localhost:8082/vitrine").then(
                resp => {
                    console.log(resp.data)
                    setItems(resp.data)
                }
            ).catch(err => {
                return err.error
            })
        }

        getListItemShowCase()
    }, [])

    function editItemOpen(value) {
        setItem(value)
        setValuesEdit(value)
        setOpenEditItem(true)
    }

    function handleCloseEditItem(value) {
        setOpenEditItem(false)
    }

    function excludeDialogOpen(value) {
        setItem(value)
        setOpenExcludeDialog(true)
    }

    function closeExcludeDialog() {
        setOpenExcludeDialog(false)
    }

    const editItem = async (value) => {
        var Dados = {}
        Dados.nome = Nome
        Dados.descricao = Descricao
        Dados.custo = Custo
        Dados.unidade = Unidade
        Dados.quantidade = Quantidade
        console.log(Dados)
        await axios.put(`http://localhost:8082/vitrine/${value._id}`, Dados).then(response => {
            alert(response.data.msg)
        })
            .catch(err => {
                console.log(err);
            })
        updateTable()
    }

    async function excludeItem(value) {
        await axios.delete(`http://localhost:8082/vitrine/${value._id}`).then(resp => {
            setOpenSnack(true)
            setMessage(resp.data.mgs)
            setColor("success")
        })
            .catch(err => {
                setOpenSnack(true)
                setMessage(err.error)
                setColor("error")
            })
        setOpenExcludeDialog(false)
        updateTable()
    }

    async function updateTable() {
        await axios.get('http://localhost:8082/vitrine').then(resp => {
            console.log(resp.data)
            setItems(resp.data)
        })
            .catch(err => {
                console.log(err);
            })

    }

    function handleCloseSnack() {
        setOpenSnack(false)
    }

    function setValuesEdit(value) {
        setNome(value.nome)
        setDescricao(value.descricao)
        setCusto(value.custo)
        setUnidade(value.unidade)
        setQuantidade(value.quantidade)
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    return (
        <div>
            <Typography variant="h5">Vitrine:</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width="20%" sx={{ textAlign: "left" }} align="right">Item</StyledTableCell>
                            <StyledTableCell align="right">Preço</StyledTableCell>
                            <StyledTableCell align="right">Unidade</StyledTableCell>
                            <StyledTableCell align="right">Quantidade</StyledTableCell>
                            <StyledTableCell align="right">Editar</StyledTableCell>
                            <StyledTableCell align="right">Excluir</StyledTableCell>
                            <StyledTableCell align="right">Adicionar no carrinho</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listItems.map((i, index) => (
                            <TableRow key={index}>
                                <TableCell height="20px" component="th" scope="row">
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                        <ListItem >
                                            <ListItemText
                                                primary={<React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        fontSize="1.5rem"
                                                        color="text.primary"
                                                    >
                                                        {i.nome}
                                                    </Typography>
                                                </React.Fragment>}
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Descrição :
                                                        </Typography>
                                                        {i.descricao}
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </TableCell>
                                <TableCell align="right">{i.custo}</TableCell>
                                <TableCell align="right">{i.unidade}</TableCell>
                                <TableCell align="right">{i.quantidade}</TableCell>
                                <TableCell align="right"><SettingsIcon onClick={() => editItemOpen(i)} /></TableCell>
                                <TableCell align="right"><DeleteForeverIcon color="error" onClick={() => excludeDialogOpen(i)} /></TableCell>
                                <TableCell align="right"><ShoppingCartIcon color="primary"  /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog
                open={openExcludeDialog}
                onClose={closeExcludeDialog}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Deseja excluir o item " + item.nome}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        O item {item.nome} será excluído permanentemente e não poderá ser vendido
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeExcludeDialog}>Cancelar</Button>
                    <Button onClick={() => excludeItem(item)} color="error">Excluir</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={editItemDialog}
                onClose={handleCloseEditItem}>
                <DialogTitle id="alert-dialog-title">
                    {"Editar dados do item"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
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
                                        <TextField id="Nome" defaultValue={item.nome} label="Nome" variant="outlined" sx={{ m: 2 }} onChange={(e) => setNome(e.target.value)} />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Descrição" defaultValue={item.descricao} label="Descrição" variant="outlined" sx={{ m: 2 }} onChange={(e) => setDescricao(e.target.value)} />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Custo" defaultValue={item.custo} label="Custo" variant="outlined" sx={{ m: 2 }} onChange={(e) => setCusto(e.target.value)} />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Unidade" defaultValue={item.unidade} label="Unidade" variant="outlined" sx={{ m: 2 }} onChange={(e) => setUnidade(e.target.value)} />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="Quantidade" defaultValue={item.quantidade} label="Quantidade" variant="outlined" sx={{ m: 2 }} onChange={(e) => setQuantidade(e.target.value)} />
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" sx={{ m: 2 }} onClick={() => editItem(item)} >Editar</Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Snackbar
                open={openSnack}
                onClose={handleCloseSnack}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnack} severity={colorSnack == "" ? "success" : colorSnack} sx={{ width: '100%' }}>
                    {messageSnack}
                </Alert>
            </Snackbar>

        </div>
    )
}

export default ListItemShowCase