import React, {useContext, useState} from 'react'
import Box from '@mui/material/Box';
import { UserNameFunc } from '../contexts/userNameContext';

// import {SampleContext} from '../contexts'

export default function TabHeader() {
  const userName = (`${UserNameFunc().props.value.userName[0]}`)
  const guestName = (`${UserNameFunc().props.value.userName[1]}`)
  const [nameClick, setNameClick] = useState(false)

  // console.log(UserNameFunc())

  const setNameonClick = () => {  
    setNameClick(!nameClick)    
    return
  }

  return (
    <>   
        <Box sx={{border: '1px solid white'}}>
            <Box sx={{border: '1px solid red'}}>
              User Name: {nameClick === false ? `${userName}` : `${guestName}`}
            </Box>
            <Box sx={{cursor: 'pointer'}} onClick={setNameonClick}>
              <p>Click to Change Name</p>
            </Box>           
        </Box>     
    </>
  )
}
