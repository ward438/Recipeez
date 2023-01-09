import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',
  }));


export default function CompleteRecipe({recipe}) {
  return (
    <Box
      sx={{
        // display: 'flex',
        // flexWrap: 'wrap',
        '& > :not(style)': {
        
        //   width: 128,
        //   height: 128,
        },
      }}
    >
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Recipe: {recipe?.name}
        </Typography>  
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {recipe?.description}
        </Typography>  
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ingredients: {recipe?.ingredients}
        </Typography>      
        <Item>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Description: {recipe?.steps}
            </Typography>
        </Item>
    </Box>
  );
}