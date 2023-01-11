import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
const foodImage = require('../../../images/food.jpg').default
const pancakes = require('../../../images/pancakes.jpg').default
const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',    
  }));




export default function CompleteRecipe({recipe}) {
  const story = recipe?.story

  return (
    <Box>       
      <div className='recipeImages' style={{backgroundColor:'#ebeaea'}}>
        <img src={foodImage.src} style={{}}/>
        <img src={pancakes.src} style={{}}/>
      </div>
      <Typography id="modal-modal-title" variant="p" component="p" sx={{backgroundColor:'#ebeaea'}}>
        <h1>{recipe?.name.toUpperCase()}</h1>
      </Typography> 
      <Typography id="modal-modal-description" sx={{ mt: 2 ,}}>
          INGREDIENTS: {recipe?.ingredients}
      </Typography>        
      <Typography id="modal-modal-description" sx={{ mt: 2 , }}>
          DESCRIPTION: {recipe?.description}
      </Typography>           
        <Typography id="modal-modal-description" sx={{ mt: 2  }}>
            STORY: {story}                  
        </Typography>
    </Box>
  );
}