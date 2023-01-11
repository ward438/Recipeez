import React, { useEffect } from "react"
import Link from 'next/link'
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const foodImage = require('../../../images/food.jpg').default
export const MealCard = ({recipe}) => {  
    return  <>
        <Link            
            href={{
                pathname: "/selected",
                query: {
                    recipe: recipe.name,
                    mealType: recipe.type
                }
            }}
            as={`/selected`}
            style={{textDecoration: 'none' }}
        >
        <Card sx={{ maxWidth: 345 }} style={{cursor: 'pointer'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                        <p>{recipe.name}                      </p>
                        <img src={foodImage.src} style={{maxWidth: '175px', maxHeight: '175px'}}/>                         
                    </Typography>                    
                    <Typography variant="body2" color="text.secondary" component="div">
                        <p>{recipe.description}</p>
                    </Typography>
                </CardContent>             
            </Card>     
        </Link>    
    </>      
}
            
            