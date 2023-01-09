import React, {useState, createContext,useContext, useEffect} from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';           
import Modal from '@mui/material/Modal';
import CraftRecipeCard from "../mealCards/craftRecipeCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export const CraftRecipeModal = ({recipe}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <>
    <Button onClick={handleOpen} sx={{color: '#f5d9c9'}}>Craft Recipe</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>              
            <CraftRecipeCard recipe={recipe}/>        
        </Box>
    </Modal>
</>
}