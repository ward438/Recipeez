




import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchLunchRecipes } from "../../../store/slices/recipes/lunch";

export const Lunch = ()=>{

    const dispatch = useDispatch();
    const lunchRecipes = useSelector(state=>state?.lunchRecipes);
    const handLunchRecipe = (recipe) => { 
        return <div key={recipe?.name}>
                 <MealCard recipe={recipe}/>                
        </div>
    }

    useEffect(()=>{
        dispatch(fetchLunchRecipes());
    },  [])
    
    return <>                   
            <Box sx={{display:'inline-flex'}}>
                {lunchRecipes?.fulfilled && <>
                    {lunchRecipes?.data.map(recipe=>{
                        return handLunchRecipe(recipe)                
                    })}
                </>}
            </Box>
        {lunchRecipes?.loading && <>Loading</>}
        {lunchRecipes?.errored && <>Errored</>}
    </>
}