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
import axios from 'axios';
import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Button from '@mui/material/Button';




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

const name = 'breakfastRecipes';


const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',
  }));


export default function CraftRecipeCard({recipe}) {

    const [spices, setSpices] = React.useState([]);
    const ingredientArr = []
    const[title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [steps, setSteps] = React.useState('')
    console.log('title:', title)
    console.log('description:',description)    
    console.log('spices:', spices)
    console.log('steps: ',steps)
    console.log(ingredientArr)


    const postRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{       
        const API_URL = "http://127.0.0.1:8000/api/recipez/?type=post"    
        return axios.post(`${API_URL}`, data).then((response) => {
            if(response.status != 200){
                rejectWithValue("API Call Failed")
            }
        return response.data;
    })  
})

    const handleChange = (event) => {
        setSpices(event.target.value);
    }; 


  return (
    <Box>
        {/* create Title */}
        <Grid container spacing={2}>            
            <Grid xs={6}>
                Title:
                <TextField
                    id="outlined-multiline-flexible"
                    label=""
                    multiline
                    maxRows={4}  
                    onInput={e => setTitle(e.target.value)}                  
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
                    onInput={e => setDescription(e.target.value)}
                    />
                </div>      
            </Box>
        </Typography>  
        {/* ingredients */}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Spices: <Typography id="modal-modal-title" variant="p" component="p">                    
                    <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
                        <InputLabel id="demo-select-large">Select Spice</InputLabel>
                        <Select
                            labelId={'spices'}
                            label={'Spices'}
                            id="demo-select-small"
                            value={spices}
                            onChange={handleChange}
                            multiple
                            sx={{maxWidth: '390px'}}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {ingredients.map((mapItem, index)=> {                                                     
                                    {ingredientArr.push(mapItem)}
                                    // {console.log(mapItem)}

                                return <MenuItem value={mapItem}>
                                    {`${mapItem}`}
                                </MenuItem>

                            })}                            
                        </Select>
                        </FormControl>
                    </Typography> 
        </Typography>  
        <Box sx={{height: '150px'}}>
            <ul style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxHeight: '100%'}}>
                {spices.map(mapItem =>  <li>{mapItem}</li>)}     
            </ul>
        </Box>
        {/* steps */}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Steps: {recipe?.story}
            <div>                            
                <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue=""
                fullWidth
                onInput={e => setSteps(e.target.value)}
                />
            </div>   
        </Typography>
        <Box sx={{paddingTop: '20px', float: 'right'}}>
            <Button variant="contained" onSubmit={()=> postRecipes()}>Submit</Button>
        </Box>

    </Box>
  );
}