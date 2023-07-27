import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { setDrawerWidth } from "../../store/drawer"



export const NavBar = ({drawerWidth = 240, openSideBar }) => {
    const dispatch = useDispatch()
    
    const onLogout =()=>{
        dispatch( startLogout() );
    }

    
    
    const handleDrawerToggle = () => {    
        if (openSideBar) {
            dispatch(setDrawerWidth(240));
        }else{
            dispatch(setDrawerWidth(0));
        }
        
    }
  return (
    <AppBar 
        position="fixed"
        sx={{
            width:{ sm: `calc(100% - ${ drawerWidth }px)` }, 
            ml:{sm:`${ drawerWidth }px`}
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{mr:2}}
                onClick={handleDrawerToggle}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div'>Journal App</Typography>
                
                <IconButton 
                    color="error"
                    onClick={onLogout}
                >
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        
        </Toolbar>

    </AppBar>
  )
}
