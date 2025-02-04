import { AltRoute, Close, Delete, Edit, Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Box, Grid, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Hero from '../Component/Hero'

export default function UI() {
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })
    const SocialBox = styled(Box)({
        display:"flex",
        gap:10
    })
    const MenuBox = styled(Box)({
        display:"flex",
        gap:30,
    })
    const SearchBox = styled(Box)({
        display:"flex",
        gap:5,
        alignItems:"center"
    })
    const menuItem = [
        {name:"Product", link:"/"},
        {name:"Services", link:"/"},
        {name:"Contact Us", link:"/"},
        {name:"Register", link:"/"},
        {name:"LogIn", link:"/"},
    ]
    const [open, setOpen] = useState(false)
  return (
    <>
        <AppBar sx={{background:"black"}} position="sticky">
            <StyledToolbar>
                <SocialBox>
                    <Edit/>
                    <Delete/>
                    <Close/>
                    <AltRoute/>
                </SocialBox>
                <MenuBox sx={{display:{xs:"none",sm:"none",md:"flex"}}}>
                    {
                        menuItem.map((item)=>(
                        <Typography sx={{cursor:"pointer", fontSize:"14px"}}>{item.name}</Typography> 
                        ))
                    }
                
                </MenuBox>
                <SearchBox>
                    <InputBase placeholder="Search for event" sx={{backgroundColor:"white", borderBottom:"none"}}></InputBase>
                    <MenuIcon sx={{backgroundColor:"white", display:{xs:"block",sm:"block",md:"none"}}} onClick={()=>setOpen(!open)}/>
                </SearchBox>
            </StyledToolbar>
            <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={()=>setOpen(!open)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <Box sx={{width:350, height:"90vh"}}>
                {
                    menuItem.map((item)=>(
                        <MenuBox >
                    
                        <MenuItem sx={{cursor:"pointer", fontSize:"14px"}}>{item.name}</MenuItem> 
                        </MenuBox>
                ))
                }
            </Box>
        </Menu>
        </AppBar>
        {/* <Hero/> */}
        <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item  xs={6} sm={4} md={3} lg={2} sx={{backgroundColor:"red"}}>1</Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} sx={{backgroundColor:"blue"}}>2</Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} sx={{backgroundColor:"green"}}>3</Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} sx={{backgroundColor:"brown"}}>4</Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} sx={{backgroundColor:"yellow"}}>5</Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} sx={{backgroundColor:"orange"}}>6</Grid>
        </Grid>
    </>
  )
}
