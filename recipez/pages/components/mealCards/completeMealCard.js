import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ConversionTable from './conversionCard';
import { ConverisonModal } from '../modals/recipeModal';


const foodImage = require('../../../images/food.jpg').default
const pancakes = require('../../../images/pancakes.jpg').default
const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',    
  }));




export default function CompleteRecipe({recipe}) {

  return (<>
      <Box>       
        <div className='recipeImages' style={{backgroundColor:'#ebeaea'}}>
          <img src={foodImage.src} style={{}}/>
          <img src={pancakes.src} style={{}}/>
        </div>
        <Box sx={{height: '1px', backgroundColor:'red'}}/>      
        <Box sx={{backgroundColor: '#afafaf', padding: '0px 0px 2px 0px'}}>        
          <Typography id="modal-modal-title" variant="p" component="p" sx={{backgroundColor:'#ebeaea'}}>
            <Box>
              <h1>{recipe?.name.toUpperCase()}</h1>
              <span style={{float: 'right'}}><ConverisonModal/></span>
            </Box>
          </Typography> 
        </Box>
        <Box sx={{height: '1px', backgroundColor:'red'}}/> 
        <Box sx={{backgroundColor: '#dbdbdb6b',border: '1px solid black'}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 ,}}>
            <Typography sx={{textDecoration: 'underline #ff0000',padding: '0px 0px 0px 10px', fontWeight: 'bold'}}>
              INGREDIENTS 
            </Typography>
              <Box sx={{padding: '0px 50px 0px 30px'}}>
                <span>{recipe?.ingredients}</span>
              </Box>
          </Typography>        
          <Typography id="modal-modal-description" sx={{ mt: 2 , }}>
            <Typography sx={{textDecoration: 'underline #ff0000', padding: '0px 0px 0px 10px', fontWeight: 'bold'}}>
              DESCRIPTION  
            </Typography>
              <Box sx={{padding: '0px 50px 0px 30px'}}>
                {recipe?.description}
              </Box>
          </Typography>           
          <Typography id="modal-modal-description" sx={{ mt: 2  }}>
              <Typography sx={{textDecoration: 'underline #ff0000',padding: '0px 0px 0px 10px', fontWeight: 'bold'}}>
                STORY   
              </Typography>              
              <Box sx={{padding: '0px 50px 0px 30px'}}>
                <span>{recipe?.story}</span>
              </Box>                 
          </Typography>
        </Box>     
      </Box>      
  </>
   
  );
}