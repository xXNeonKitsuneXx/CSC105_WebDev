import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function Nav() {
  return (
    <Box sx={{flexGrow: 1, marginTop: 2}}>
      <AppBar position="static" sx={{backgroundColor: "#20232a"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            My Website
          </Typography>
          <Box display={{xs:"none", md:"block"}}>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">CONTACT</Button>
          </Box>
          <IconButton sx={{display:{xs: "block", md: "none"}, color: "white"}}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav
