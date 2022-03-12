
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
   
  return (
    <div><AppBar  position="absolute" sx={{height:100}} >
<Toolbar   >

<Typography  component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow:1 ,ml:30}}
             >
            School
            </Typography>
            <IconButton color="inherit">
                <NotificationsIcon />
              
            </IconButton>
           
            
</Toolbar>
<Typography  variant="h"
              color="inherit"
              noWrap
              sx={{ flexGrow:1 ,ml:130}}
             >
    You are here:App/Section/Page
            </Typography>
       
            </AppBar>
            </div>
  )
}

export default Header