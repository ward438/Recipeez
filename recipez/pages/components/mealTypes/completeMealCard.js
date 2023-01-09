import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
const foodImage = require('../../../images/food.jpg').default

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',
  }));


export default function CompleteRecipe({recipe}) {
  return (
    <Box
      sx={{'& > :not(style)': {        
        //   width: 128,
        //   height: 128,
        },
      }}
    >
        <Grid container spacing={2}>
            <Grid xs={6}>
                <Typography id="modal-modal-title" variant="p" component="p">
                    <h1>{recipe?.name}</h1>
                </Typography> 
            </Grid>
            <Grid xs={6}>
                <img src={foodImage.src} style={{maxWidth: '175px', maxHeight: '175px'}}/>
            </Grid>        
        </Grid>         
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {recipe?.description}
        </Typography>  
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ingredients: {recipe?.ingredients}
        </Typography>      
        <Item>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Steps: {recipe?.story}
            </Typography>
        </Item>
    </Box>
  );
}