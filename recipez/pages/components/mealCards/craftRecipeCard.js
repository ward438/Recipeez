import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
const foodImage = require('../../../images/food.jpg').default
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


const ingredients = [
    'Bay Leaves',
    'Cayenne',
    'Chili Powder',
    'Cinnamon-Ground ',
    'Cinnamon-Stick',
    'Cloves',
    'Cumin',
    'Curry Powder',
    'Dill Weed',
    'Garlic Powder',
    'Ginger-Ground',
    'Ginger--Fresh',
    'Nutmeg-Ground',
    'Onion Powder',
    'Oregano',
    'Paprika',
    'Black Pepper',
    'White Pepper'
]


const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',
  }));


export default function CraftRecipeCard({recipe}) {

    const [spices, setSpices] = React.useState('');
    const ingredientArr = [{}]

    const handleChange = (event) => {
        setSpices(event.target.value);
    }; 


    console.log(ingredientArr)
  return (
    <Box>
        {/* create Title */}
        <Grid container spacing={2}>            
            <Grid xs={6}>
                Create Title
                <TextField
                    id="outlined-multiline-flexible"
                    label=""
                    multiline
                    maxRows={4}                    
                />   
            </Grid>
            <Grid xs={6}>
                <img src={foodImage.src} style={{maxWidth: '175px', maxHeight: '175px'}}/>
            </Grid>        
        </Grid>   
            {/* description */}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>             
            <Box component="form" noValidate autoComplete="off">               
                Description:
                <div>                            
                    <TextField
                    id="outlined-multiline-static"
                    label=""
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth
                    />
                </div>      
            </Box>
        </Typography>  
        {/* ingredients */}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ingredients: <Typography id="modal-modal-title" variant="p" component="p">                    
                    <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
                        <InputLabel id="demo-select-large">Select Spice</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={spices}
                            label="Spices"
                            onChange={handleChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {ingredients.map((mapItem, index)=> {                                                     
                                    {ingredientArr.push(mapItem)}
                                return <MenuItem value={index}>
                                    {mapItem} {index}
                                </MenuItem>

                            })}                            
                        </Select>
                        </FormControl>
                    </Typography> 
        </Typography>
            {spices}
        {/* steps */}
        <Item>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Steps: {recipe?.story}
            </Typography>
        </Item>
    </Box>
  );
}