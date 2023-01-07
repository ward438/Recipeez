import React, {useState, createContext,useContext, useEffect} from "react"
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import {fetchUserProfile} from "../../store/slices/users/userProfile";


export const UserNameContext = createContext({
    user: {username: 'InitialName'},
    setUser: ()=>{}
})

export const UserName = () => {

    const dispatch = useDispatch();
    const userProfile = useSelector(state=>state.userProfile);

    console.log(userProfile)

    useEffect(()=>{
        dispatch(fetchUserProfile());
    },  [])
    
    return (   
        <Box sx={{border: '1px solid red'}}>
            {userProfile.fulfilled && <>
                User Name: {userProfile.data.username}
                <Button onClick={()=>{
                    dispatch(fetchUserProfile());
                }}>
                    click
                </Button>
             </>}
             {userProfile.loading && <>Loading</>}
             {userProfile.errored && <>Errored</>}
            
        </Box>   
    )
}


export default UserNameContext;