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

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',
  }));


export default function CraftRecipeCard({recipe}) {

    const [spices, setSpices] = React.useState('');

    const handleChange = (event) => {
        setSpices(event.target.value);
    };

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
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>salt</MenuItem>
                            <MenuItem value={20}>pepper</MenuItem>
                            <MenuItem value={30}>cumin</MenuItem>
                        </Select>
                        </FormControl>
                    </Typography> 
        </Typography>      
        <Item>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Steps: {recipe?.story}
            </Typography>
        </Item>
    </Box>
  );
}