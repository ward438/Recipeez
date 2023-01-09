import React from "react"
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';           
import { RecipeModal } from "../recipeModal";

  
export const MealCard = ({recipe}) => {
    
    return  <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <p>{recipe.name}</p>  
                    </Typography>
                    {/* <Typography>
                        <p>{recipe.ingredients.map((ingredient, index)=>{
                        return <span key={index}>{ingredient}<br/></span>
                        })}</p>
                    </Typography> */}
                    <Typography variant="body2" color="text.secondary">
                        <p>{recipe.description}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                        <RecipeModal recipe={recipe}/>
                </CardActions>
            </Card>
}
            
            