import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchTreatsRecipes } from "../../../store/slices/recipes/treats";
fetchTreatsRecipes
export const Treats = ()=>{

    const dispatch = useDispatch();
    const treatRecipes = useSelector(state=>state?.treatsRecipes);
    const handleTreatsRecipe = (recipe) => { 
        return <div key={recipe?.name}>
                 <MealCard recipe={recipe}/>                
        </div>
    }

    useEffect(()=>{
        dispatch(fetchTreatsRecipes());
    },  [])
    
    return <>                   
            <Box sx={{display:'inline-flex'}}>
                {treatRecipes?.fulfilled && <>
                    {treatRecipes?.data.map(recipe=>{
                        return handleTreatsRecipe(recipe)                
                    })}
                </>}
            </Box>
        {treatRecipes?.loading && <>Loading</>}
        {treatRecipes?.errored && <>Errored</>}
    </>
}