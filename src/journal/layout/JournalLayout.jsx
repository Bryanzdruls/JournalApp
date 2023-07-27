import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



export const JournalLayout = ({ children }) => {
  
  const drawerWidth = useSelector((state)=>state.drawer);
  
  const [openSideBar, setopenSideBar] = useState(true)


  useEffect(() => {
    if (drawerWidth.drawerWidth == 240) {
      setopenSideBar(!openSideBar)
    }else{
      setopenSideBar(!openSideBar)
    }
  }, [drawerWidth])
  
  
  return (
    <Box sx={{display: 'flex'}} className="animate__animated animate__fadeIn animate__faster">

        <NavBar  openSideBar={openSideBar}  drawerWidth={ drawerWidth }/>

        <SideBar openSideBar={openSideBar} drawerWidth={ drawerWidth } />
        {/* sidebar drawerWidth */}

        <Box
            component='main'
            sx={{ flexGrow: 1, p:3 }}
        >
            <Toolbar/>
            { children }

        </Box>
    </Box>
  )
}
