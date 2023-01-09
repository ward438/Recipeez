import React, {useEffect} from "react"
import { fetchBreakfastRecipes } from "../../../store/slices/recipes/breakfastRecipes"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";

export const Breakfast = ()=>{

    const dispatch = useDispatch();
    const breakfastRecipes = useSelector(state=>state.breakfastRecipes);

    const handleBkfastRecipe = (recipe) => { 
        return <div key={recipe.name}>
                 <MealCard recipe={recipe}/>                
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