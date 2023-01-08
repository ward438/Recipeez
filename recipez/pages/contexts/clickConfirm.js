import React, {useState, createContext,useContext, useEffect} from "react"
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { clickConfirmation } from "../../store/slices/conf.js/index.js";



export const ClickConfirm = () => {

    const dispatch = useDispatch();
    const userClick = useSelector(state=>state.userClick);

    // console.log(1,userClick?.data)

    useEffect(()=>{
        dispatch(clickConfirmation('home'));
    },  [])
    
    return (   
        <>
            {userClick?.data?.userClick}
            {/* {dispatch(clickConfirmation())} */}
        </>        
    )
}


