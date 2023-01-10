import React from "react"
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';           
import { RecipeModal } from "../modals/recipeModal";

const foodImage = require('../../../images/food.jpg').default
  
export const MealCard = ({recipe}) => {
    
    return  <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                        <p>{recipe.name}                      </p>
                        <img src={foodImage.src} style={{maxWidth: '175px', maxHeight: '175px'}}/>                         
                    </Typography>                    
                    <Typography variant="body2" color="text.secondary" component="div">
                        <p>{recipe.description}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                        <RecipeModal recipe={recipe}/>
                </CardActions>
            </Card>
}
            
            