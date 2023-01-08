import React, {useContext, useState} from 'react'
import TabMenu from './tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function TabHeader({children}) {
  
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Box>
              <TabMenu/>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              {children}
            </Box>
          </Grid>       
        </Grid>        
      </Box>

      
    </>
  )
}
