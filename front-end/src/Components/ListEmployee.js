import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';



function ListEmployee() {

    useEffect(() => {
      async function createData() {
        await axios.get('http://localhost:8082/funcionario').then(resp => {
            console.log(resp.data)
            setRows(resp.data)
        })
            .catch(err => {
                console.log(err);
            })
    }
      createData();
    }, [])  

    const [rows, setRows] = useState([]);
    const [openDialog, setOpen] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [user, setUser] = useState([])
    const [messageSnack, setMessage] = useState("")
    const [colorSnack, setColor] = useState("")
    const [editUserDialog, setDialogEditUser] = useState(false)
    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    const [Cargo, setCargo] = useState('')

    function handleClickOpen(value){
        setUser(value)
        setOpen(true)
      }
  
      function editUserOpen(value){
        setUser(value)
        setValuesEdit(value)
        setDialogEditUser(true)
      }
  
      function setValuesEdit(value){
        setNome(value.nome)
        setEmail(value.email)
        setSenha(value.senha)
        setCpf(value.cpf)
        setCargo(value.cargo)
      }
  
      function handleClose(){     
        setOpen(false)
      }
  
      function handleCloseEditUser(){
        setDialogEditUser(false)
      }
  
      function handleCloseSnack(){     
        setOpenSnack(false)
      }
  
      async function ExcludeUser(value){
        await axios.delete(`http://localhost:8082/funcionario/${value._id}`).then(resp => {
              setOpenSnack(true)
              setMessage(resp.data.mgs)
              setColor("success")
          })
              .catch(err => {
                setOpenSnack(true)
                setMessage(err.error)
                setColor("error")
              })
              setOpen(false)
              updateTable()
      }
  
      async function editUser (value) {
        var Dados = {}
        Dados.nome = Nome
        Dados.email = Email
        Dados.senha = Senha
        Dados.cargo = Cargo
        Dados.cpf = cpf
        console.log(Dados)
        await axios.put(`http://localhost:8082/funcionario/${value._id}`, Dados).then(resp => {
          setOpenSnack(true)
          setMessage(resp.data.msg)
          setColor("success")
        })
            .catch(err => {
              setOpenSnack(true)
              setMessage(err.error)
              setColor("error")
            })
            setDialogEditUser(false)
            updateTable()
    }
  
      async function updateTable(){
        await axios.get('http://localhost:8082/funcionario').then(resp => {
              console.log(resp.data)
              setRows(resp.data)
          })
              .catch(err => {
                  console.log(err);
              })
      
      }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      


  return (

    <div>
    <Typography variant="h5" component="div" m={2} fontFamily="Times New Roman">Funcionários :</Typography>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Cpf</StyledTableCell>
            <StyledTableCell align="right">Cargo</StyledTableCell>
            <StyledTableCell align="right">Editar</StyledTableCell>
            <StyledTableCell align="right">Excluir</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{row.nome}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.cpf}</StyledTableCell>
              <StyledTableCell align="right">{row.cargo}</StyledTableCell>
              <StyledTableCell align="right"><SettingsIcon onClick={() => editUserOpen(row)}/></StyledTableCell>
              <StyledTableCell align="right"><DeleteForeverIcon color="error" onClick={() => handleClickOpen(row)}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Dialog
        open={openDialog}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja excluir o usuário " + user.nome}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O usuário {user.nome} será excluído permanentemente e não terá mais acesso ao site
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => ExcludeUser(user)} color="error">Excluir</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editUserDialog}
             onClose={handleCloseEditUser}>
               <DialogTitle id="alert-dialog-title">
                  {"Editar dados do usuário"}
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
                            <TextField id="Nome" label="Nome" defaultValue={user.nome} variant="outlined" sx={{ m: 2 }} onChange={(e) => setNome(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField type="email" id="Email" defaultValue={user.email} label="Email" variant="outlined" sx={{ m: 2 }} onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="Cpf" label="Cpf" defaultValue={user.cpf} variant="outlined" sx={{ m: 2 }} onChange={(e) => setCpf(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="Cargo" label="Cargo" defaultValue={user.cargo} variant="outlined" sx={{ m: 2 }} onChange={(e) => setCargo(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField type="password" id="Senha" defaultValue={user.senha} label="Senha" variant="outlined" sx={{ m: 2 }} onChange={(e) => setSenha(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ m: 2 }} onClick={() => editUser(user)} >Editar</Button>
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
        anchorOrigin={{vertical:'bottom', horizontal: 'center'}}
      >
        <Alert onClose={handleClose} severity={colorSnack == "" ? "success" : colorSnack} sx={{ width: '100%' }}>
          {messageSnack}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ListEmployee;