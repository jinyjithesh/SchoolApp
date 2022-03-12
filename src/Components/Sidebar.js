import { Assignment, Email, Folder,  House, Logout,  } from '@mui/icons-material'
import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar } from '@mui/material'
import { blue, red } from '@mui/material/colors'
import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
function Sidebar() {
  return (
    <div>
        <Drawer variant="permanent">
            <Toolbar  sx={{
              display: 'flex',
              alignItems: 'center',
              
              px: [1],
              backgroundColor:blue,
            }}>
                <Stack>
                    <Avatar  sx={{ width: 24, height: 24,         color:red,    px: [1],   alignItems: 'center', }} alt="" src="" />
                    Fay Munchkin   
                    
                    </Stack>
            </Toolbar>
            <Divider/>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <House/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                   
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Email/>
                    </ListItemIcon>
                    <ListItemText primary="Communication" />
                   
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        
                    <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profiles" />
                   
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <WorkIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Activites" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Assignment/>
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Folder/>
                    </ListItemIcon>
                    <ListItemText primary="Resources" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Logout/>
                    </ListItemIcon>
                    <ListItemText primary="Setups" />
                </ListItemButton>
                
            </List>
        </Drawer>
        </div>
  )
}

export default Sidebar