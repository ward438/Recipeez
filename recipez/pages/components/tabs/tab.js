import React, {useContext, useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ActiveTabContext } from '../layouts/main';

export const Tab = ({tab, index}) =>{
    return <Grid container>
    <Grid item xs={12}>
        <ActiveTabContext.Consumer>
            {({setActiveTabIndex}) => (
                <Box  sx={{display: 'inline-flex', paddingRight: '10px'}}>                                
                    <Box sx={{background: "linear-gradient(to bottom, #b30905, #ff080187)", padding: '15px',
                    cursor: 'pointer', borderRadius: '5px 5px 0px 0px', gap: '10px', color: '#f7f0ded6',fontSize: '20px'}} 
                    onClick={()=> {setActiveTabIndex(index)}}
                        >
                        {tab.name}
                    </Box>
            </Box>
            )}
            
        </ActiveTabContext.Consumer>
    </Grid>                 
</Grid>  
}
