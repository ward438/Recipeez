import UserNameContext from './contexts/userNameContext'
import {UserName} from './contexts/userNameContext'
import React, {useState, useContext} from 'react'
import Box from '@mui/material/Box';
// import styles from '../styles/Home.module.css'
import TabHeader from './tab_header'




export default function Home() {  
  return (    
    <>
        <TabHeader>  
          <UserName/>
        </TabHeader>
        <Box sx={{width: '100%', border: '2px solid #241313b3', borderRadius: '0px 5px 5px 5px'}}>
          <p>Recipe Stuff</p>
        </Box>
    </>
  )
}
