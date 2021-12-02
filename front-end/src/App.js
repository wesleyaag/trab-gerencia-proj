import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import * as React from 'react';
import { Outlet, Link } from "react-router-dom";


function App() {

  return (
    <div className="App">

      <AppBar position="static">


        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quitanda
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/Login"
          >
            <AccountCircleIcon />
            <Button
              color="inherit"
              edge="end"
              size="large">Login</Button>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Outlet />

    </div>
  );
}

export default App;
