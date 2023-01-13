import React, {useEffect} from "react"
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { SearchBarFilter } from '../../searchBarFilter/searchBar';
import { ThemeProvider } from "@emotion/react";
import { CraftRecipeModal } from "../../modals/craftRecipeModal";

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
    const buttonTheme = createTheme({
        components: {
        MuiButton: {
            styleOverrides: {
            root: {
                fontSize: '.75rem',
                backgroundColor: '#c9342ed4',
            },
            },
        },
        },
    });

export const SubHeader = () => {
    const [textState, setTextState] = React.useState('')   

    return <>   
        <Box>
            <Box sx={mainHeaderTheme?.typography} 
                component="form"      
                noValidate
                autoComplete="off"
            >          
                <TextField id="filled-basic"  onInput={(e)=> {setTextState(e.target.value.toLowerCase())}}/> 
                <SearchBarFilter searchValue={textState}/>
            </Box>  
            <Box sx={{position: 'relative',float: 'right', margin: '-50px 15px 0px 0px' }}>
                <ThemeProvider theme={buttonTheme}>                    
                    <CraftRecipeModal/>
                </ThemeProvider>
            </Box>     
            <Box sx={border?.typography}/>           
        </Box>     
    </>
}