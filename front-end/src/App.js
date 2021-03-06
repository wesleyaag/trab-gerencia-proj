import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Chip } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import { Box } from '@material-ui/system';
import PersonAdd from '@material-ui/icons/PersonAdd';
import WarehouseIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';

function App() {

  const [dialogDrawer, setOpenDrawer] = useState(false)

  function openDrawer(){
    setOpenDrawer(true)
  }

  function closeDrawer(){
    setOpenDrawer(false)
  }

  return (
    <div className="App">

      <AppBar position="static">


        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" color = "inherit"  sx={{ flexGrow: 1 }}>
            Quitanda ATW
          </Typography>
          <Chip avatar={<AccountCircleIcon />} 
          label="Login" 
          component={Link}
          variant="outlined"
          to="/Login"
          size="medium"/>
                
        </Toolbar>
      </AppBar>

      <Drawer
            anchor={"left"}
            open={dialogDrawer}
            onClose={closeDrawer}
          >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <List>
              <ListItem button
              component={Link}
              to="/ListCustomer">
                <ListItemIcon>
                  <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary={"Lista de usu??rios"} />
              </ListItem>
              <ListItem button
              component={Link}
              to="/ListEmployee">
                <ListItemIcon>
                  <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary={"Lista de funcion??rios"} />
              </ListItem>
              <ListItem button
              component={Link}
              to="/RegisterEmployee">
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary={"Cadastrar funcion??rio"} />
              </ListItem>
              <ListItem button
              component={Link}
              to="/ListItemInventory">
                <ListItemIcon>
                  <WarehouseIcon />
                </ListItemIcon>
                <ListItemText primary={"Estoque"} />
              </ListItem>
              <ListItem button
              component={Link}
              to="/ShowCase">
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={"Carrinho"} />
              </ListItem>
              <ListItem button
              component={Link}
              to="/ShowCase">
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary={"Vitrine"} />
              </ListItem>
          </List>
        </Box>
      </Drawer>

      <Outlet />

    </div>
  );
}

export default App;


/*<Typography variant="h6">D?? uma olhadinha na nossa vitrine de produtos!</Typography>
<Button variant = "outlined"
  color = "primary" 
  component={Link} to="/ShowCase">
  Ir para a vitrine
</Button>
*/