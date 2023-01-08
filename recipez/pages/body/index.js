import React, {useState, useContext} from 'react'
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux"
import { ClickConfirm } from '../contexts/clickConfirm';
import { clickConf } from '../../store/slices/conf.js';


export default function ContentBody({children}) {   
   
  return (    
    <>
      <Box>
        {/* body content */}
        {children}
      </Box>
    </>
  )
}
