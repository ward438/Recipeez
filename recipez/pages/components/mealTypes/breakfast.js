import React, {useState, createContext,useContext, useEffect} from "react"
import { fetchBreakfastRecipes } from "../../../store/slices/recipes/breakfastRecipes"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export const Breakfast = ()=>{

    const dispatch = useDispatch();
    const breakfastRecipes = useSelector(state=>state.breakfastRecipes);

    const handleBkfastRecipe = (recipe) => { 
        return <div key={recipe.name}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <p>{recipe.name}</p>  
                    </Typography>
                    <Typography>
                        <p>{recipe.ingredients.map((ingredient, index)=>{
                        return <span key={index}>{ingredient}<br/></span>
                        })}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>{recipe.description}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>                          
        </div>
    }

    useEffect(()=>{
        dispatch(fetchBreakfastRecipes());
    },  [])
    
    return <>                   
            <Box sx={{display:'inline-flex'}}>
                {breakfastRecipes.fulfilled && <>
                    {breakfastRecipes.data.map(recipe=>{
                        return handleBkfastRecipe(recipe)                
                    })}
                </>}
            </Box>
        {breakfastRecipes.loading && <>Loading</>}
        {breakfastRecipes.errored && <>Errored</>}
    </>
}