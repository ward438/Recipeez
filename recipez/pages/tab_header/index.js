import React, {useContext, useState} from 'react'
import Box from '@mui/material/Box';
import TabMenu from './tab';

export default function TabHeader({children}) {
  
  return (
    <>   
      <Box>
        <TabMenu/>
      </Box>
      <Box sx={{border: '1px solid white'}}>
        {children}
      </Box>     
    </>
  )
}
