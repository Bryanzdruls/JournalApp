import { useDispatch, useSelector } from "react-redux"

import { Box, Divider, Drawer,  IconButton,  List, Toolbar, Typography,  } from "@mui/material"
import { SideBarItem } from "./SideBarItem";
import {  useEffect, useState } from "react";
import { MenuOutlined } from "@mui/icons-material";
import { setDrawerWidth } from "../../store/drawer";





export const SideBar = ({ drawerWidth=240, openSideBar }) => {
    const dispatch=useDispatch();

    const {displayName}=useSelector(state => state.auth);
    const {notes}=useSelector(state => state.journal);

    
    const handleDrawerToggle = () => {  
        if (openSideBar) {
            dispatch(setDrawerWidth(240));
        }else{
            dispatch(setDrawerWidth(0));
        }
    }

    
  return (
    <Box
        component='nav'
        sx={{width:{sm: drawerWidth}, flexShrink:{ sm:0 }}}
    >
        <Drawer
            variant="temporary" //temporary
            open={openSideBar}
            
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper':{boxSizing: 'border-box',width: drawerWidth} 
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    {displayName}
                </Typography>
                <IconButton
                color="primary"
                onClick={ handleDrawerToggle }
                >
                <MenuOutlined/>
            </IconButton>
            </Toolbar>
            

            <Divider/>

            <List>
                {
                    notes.map(note=> (
                        <SideBarItem handleDrawerToggle={ handleDrawerToggle } key={note.id} {...note}/>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
