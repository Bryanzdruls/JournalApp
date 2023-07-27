import { createSlice } from '@reduxjs/toolkit';
export const drawerSlice = createSlice({
    name: 'drawer',
    initialState:{
        drawerWidth:240,
    },
    reducers: {
        setDrawerWidth: (state= initialDrawer,action)=>{
            state.drawerWidth = action.payload;
        },
    }
});
export const { setDrawerWidth } = drawerSlice.actions;