import React, {useState, createContext,useContext, useEffect} from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';           
import Modal from '@mui/material/Modal';
import CompleteRecipe from "../mealCards/completeMealCard";

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


export const RecipeModal = ({recipe}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <>
    <Button onClick={handleOpen}>View Recipe</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>              
            <CompleteRecipe recipe={recipe}/>        
        </Box>
    </Modal>
</>
}