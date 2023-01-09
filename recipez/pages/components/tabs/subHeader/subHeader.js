import React, {useContext, useState} from 'react'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const mainHeaderTheme = createTheme({  
    typography: {
        height: '75px',
        background: "linear-gradient(to bottom, #f2e0d0, #f3e2d200)",
        padding: '10px 0px 0px 10px',
        marginBottom: '-10px',
        '& > :not(style)': { width: '320px' },
        boxShadow: 1
    },
  });
  const border = createTheme({  
    typography: {
        height: '3px',
        backgroundColor: '#f0f0f0',   
        width: '50%',
        margin: '0 auto',
        minWidth: '98.5%'                
    },
  });


export const SubHeader = () => {
    return <>   
        <Box>
            <Box sx={mainHeaderTheme?.typography} 
                component="form"      
                noValidate
                // autoComplete="off"
            >          
                <TextField id="filled-basic" label="Search" variant="filled" /> 
            </Box>       
            <Box sx={border?.typography}/>           
        </Box>     
    </>
}